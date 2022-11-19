import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/abf/api/product';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { model } from './data.model';
import { CursosService } from 'src/app/abf/service';
import { LISTA_CANTIDAD, mostrarDatos, CANTIDAD_INICIAL } from 'src/app/abf/utils';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss'],
  providers: [MessageService]
})
export class ListarCursosComponent implements OnInit {
  private lastTableLazyLoadEvent: LazyLoadEvent | undefined;
  genericDialog: boolean = false;

  deletegenericDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  lista: any[] = [];
  total =0;
  cantidad=CANTIDAD_INICIAL;
  listaCantidadPorPagina= LISTA_CANTIDAD;
  loading= true;
  first=0;

  item: any = {};

  selectedProducts: any[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = LISTA_CANTIDAD;

  @ViewChild('dt', { static: false }) dt: any;
  constructor(private messageService: MessageService,
    private service:CursosService) { }

  ngOnInit(): void {
    this.cols = model;
      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
      this.buscar({sortField:'idCurso',sortOrder:'ASC', first:0, rows:this.cantidad});
  }
  openNew() {
    this.item = {};
    this.submitted = false;
    this.genericDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editItem(data:any) {
    this.item = { ...data };
    this.genericDialog = true;
  }
  deleteProduct(product: Product) {
    this.deletegenericDialog = true;
    this.item = { ...product };
  }

  confirmDelete() {
    this.service.eliminar(this.item.idCurso).subscribe(data => {
      this.deletegenericDialog = false;
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Curso eliminado', life: 3000 });
      this.buscar({sortField:'idCurso',sortOrder:'ASC', first:0, rows:this.cantidad});
    })
  }

  hideDialog() {
    this.genericDialog = false;
    this.submitted = false;
  }

  saveItem() {
    if(this.item.idCurso){
      this.item.userModificacion='admin'
  
      this.service.modificar(this.item, this.item.idCurso).subscribe( data =>{
        this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Curso modificado.', life: 3000 });
        this.buscar({sortField:'idCurso',sortOrder:'ASC', first:0, rows:this.cantidad});
        this.hideDialog()
      }, err =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Curso creado.', life: 3000 });
      })
  
    }else{
      this.item.userCreacion='admin'
      this.item.estadoTipoDocumento="ACTIVO"
      this.service.agregar(this.item).subscribe( data =>{
        this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Curso creado.', life: 3000 });
        this.buscar({sortField:'idCurso',sortOrder:'ASC', first:0, rows:this.cantidad});
        this.hideDialog()
      }, err =>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Curso no fue creado.', life: 3000 });
      })
    }
    
  }

  mostrarDatos(item:any, props:any){
    return mostrarDatos(item,props)
  }

  buscar(even:any){
    console.log(even);
    
    let {sortField,sortOrder, first, rows} = even;
    let params ={
        cantidad:rows,
        pagina:first/this.cantidad,
        orderBy:sortField?sortField:"idCurso",
        orderDir:sortOrder>0?"ASC":"DESC",
        filtros: {
        }
    }
    if(rows != 0) {
        this.loading=true;
        this.service.paginado(params).subscribe( (data:any)=>{
            this.lista= data.lista;
            this.total = data.total;
            this.loading = false;
          },err =>{
            this.lista= [];
            this.total =0 ;
            this.loading = false;
          })
          }
  }

}
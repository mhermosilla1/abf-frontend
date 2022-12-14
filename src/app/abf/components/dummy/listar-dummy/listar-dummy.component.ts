import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/abf/api/product';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/abf/service/product.service';
import { model } from './data.model';
import { DummyService } from 'src/app/abf/service';
import { LISTA_CANTIDAD, mostrarDatos,CANTIDAD_INICIAL } from 'src/app/abf/utils';

@Component({
  selector: 'app-listar-dummy',
  templateUrl: './listar-dummy.component.html',
  styleUrls: ['./listar-dummy.component.scss'],
  providers: [MessageService]

})
export class ListarDummyComponent implements OnInit {
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
    private service:DummyService) { }

  ngOnInit() {

      this.cols = model;
      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
      this.buscar({sortField:'id',sortOrder:'ASC', first:0, rows:this.cantidad});
  }

  openNew() {
      this.item = {};
      this.submitted = false;
      this.genericDialog = true;
  }

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }

  editProduct(product: Product) {
      this.item = { ...product };
      this.genericDialog = true;
  }

  deleteProduct(product: Product) {
      this.deletegenericDialog = true;
      this.item = { ...product };
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
     this.lista= this.lista.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedProducts = [];
  }

  confirmDelete() {
  
  }

  hideDialog() {
      this.genericDialog = false;
      this.submitted = false;
  }

  saveProduct() {
  
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
        orderBy:sortField?sortField:"id",
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

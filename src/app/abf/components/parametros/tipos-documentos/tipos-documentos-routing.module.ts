import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDocumentosComponent } from './listar-documentos/listar-documentos.component';

const routes: Routes = [
  {
  path:'',component:ListarDocumentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDocumentosRoutingModule { }

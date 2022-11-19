import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMallasComponent } from './listar-mallas/listar-mallas.component';

const routes: Routes = [{
  path:'',component:ListarMallasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDummyComponent } from './listar-dummy/listar-dummy.component';

const routes: Routes = [{
  path:'',component:ListarDummyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyRoutingModule { }
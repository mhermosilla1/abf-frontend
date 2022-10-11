import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTorneosComponent } from './listar-torneos/listar-torneos.component';

const routes: Routes = [{
  path:'',component:ListarTorneosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
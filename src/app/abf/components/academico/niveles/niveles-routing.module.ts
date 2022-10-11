import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNivelesComponent } from './listar-niveles/listar-niveles.component';

const routes: Routes = [{
  path:'',component:ListarNivelesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelesRoutingModule {}
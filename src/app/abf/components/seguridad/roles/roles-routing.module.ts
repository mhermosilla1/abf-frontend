import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRolesComponent } from './listar-roles/listar-roles.component';

const routes: Routes = [
  {
    path:'',component:ListarRolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule {}
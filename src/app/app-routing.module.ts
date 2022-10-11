import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './abf/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./abf/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'dummy', loadChildren: () => import('./abf/components/dummy/dummy.module').then(m => m.DummyModule) },
                    { path: 'roles', loadChildren: () => import('./abf/components/seguridad/roles/roles.module').then(m => m.RolesModule) },
                    { path: 'tipos-documentos', loadChildren: () => import('./abf/components/parametros/tipos-documentos/tipos-documentos.module').then(m => m.TiposDocumentosModule) },
                    { path: 'niveles', loadChildren: () => import('./abf/components/academico/niveles/niveles.module').then(m => m.NivelesModule) }
                ],
            },
            { path: 'auth', loadChildren: () => import('./abf/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Ejemplo',
                items: [
                    { label: 'Dummy', icon: 'pi pi-fw pi-cog', routerLink: ['/dummy'] }
                ]
            },
            {
                label: 'Parámetros',
                items: [
                    { label: 'Tipos de Documentos', icon: 'pi pi-fw pi-cog', routerLink: ['/tipos-documentos'] }
                ]
            },
            {
                label: 'Seguridad',
                items: [
                    { label: 'Roles', icon: 'pi pi-fw pi-cog', routerLink: ['/roles'] }
                ]
            },
            {
                label: 'Académico',
                items: [
                    { label: 'Asistencia', icon: 'pi pi-fw pi-cog', routerLink: ['/asistencia'] },
                    { label: 'Cursos', icon: 'pi pi-fw pi-cog', routerLink: ['/cursos'] },
                    { label: 'Evaluaciones', icon: 'pi pi-fw pi-cog', routerLink: ['/Evaluaciones'] },
                    { label: 'Mallas curriculares', icon: 'pi pi-fw pi-cog', routerLink: ['/mallascurriculares'] },
                    { label: 'Torneos', icon: 'pi pi-fw pi-cog', routerLink: ['/torneos'] },
                    { label: 'Inscripciones', icon: 'pi pi-fw pi-cog', routerLink: ['/inscripciones'] },
                    { label: 'Niveles', icon: 'pi pi-fw pi-cog', routerLink: ['/niveles'] },
                    { label: 'Calendario', icon: 'pi pi-fw pi-cog', routerLink: ['/Calendario'] },
                    { label: 'Fichas de torneos', icon: 'pi pi-fw pi-cog', routerLink: ['/fichastorneos'] }
                ]
            },
            {
                label: 'Gestión de cobros y pagos',
                items: [
                    { label: 'Pagos a docentes', icon: 'pi pi-fw pi-cog', routerLink: ['/pagodocente'] },
                    { label: 'Pagos a funcionarios', icon: 'pi pi-fw pi-cog', routerLink: ['/pagofuncionario'] },                    
                    { label: 'Cobros a alumnos', icon: 'pi pi-fw pi-cog', routerLink: ['/cobroalumno'] },
                    { label: 'Otros cobros', icon: 'pi pi-fw pi-cog', routerLink: ['/otroscobros'] }
                ]
            },
            {
                label: 'Materiales y préstamos',
                items: [
                    { label: 'Materiales', icon: 'pi pi-fw pi-cog', routerLink: ['/materiales'] },
                    { label: 'Préstamos', icon: 'pi pi-fw pi-cog', routerLink: ['/prestamos'] }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            },
        ];
    }
}

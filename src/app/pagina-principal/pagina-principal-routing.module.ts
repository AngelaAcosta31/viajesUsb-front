import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinosModule } from '../destinos/destinos.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from '../clientes/listado/listado.component';
import { CrearClienteComponent } from '../clientes/crear-cliente/crear-cliente.component';
import { ListadoDestinosComponent } from '../destinos/listado/listado.component';
import { VerDetalleComponent } from '../detalleplan/ver-detalle/ver-detalle.component';
import { ListadoPlanComponent } from '../planes/listado/listado.component';
import { VerTipoidComponent } from '../tipoidentificacion/ver-tipoid/ver-tipoid.component';
import { VerTipodestinoComponent } from '../tiposdestinos/ver-tipodestino/ver-tipodestino.component';
import { VerUsuarioComponent } from '../usuarios/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'destinos',
        component: ListadoDestinosComponent,
      },
      {
        path: 'tipoDestinos',
        component: VerTipodestinoComponent,
      },
      {
        path: 'clientes',
        component: ListadoComponent,
      },
      {
        path: 'crearCliente',
        component: CrearClienteComponent,
      },
      {
        path: 'editarCliente/:id',
        component: CrearClienteComponent,
      },
      {
        path: 'detallePlan',
        component: VerDetalleComponent,
      },
      {
        path: 'plan',
        component: ListadoPlanComponent,
      },
      {
        path: 'tipoId',
        component: VerTipoidComponent,
      },
      {
        path: 'usuarios',
        component: VerUsuarioComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }

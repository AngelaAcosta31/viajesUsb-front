import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDestinoComponent } from './crear-destino/crear-destino.component';
import { ListadoDestinosComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'destinos',
    component: ListadoDestinosComponent
  },
  {
    path: 'crearDestino',
    component: CrearDestinoComponent,
  },
  {
    path: 'editarDestino/:id',
    component: CrearDestinoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }

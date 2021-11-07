import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { VerTipoidComponent } from './ver-tipoid/ver-tipoid.component';

const routes: Routes = [
  {
    path: 'tipoId',
    component: VerTipoidComponent,
  },
  {
    path: 'crearTipoId',
    component: CrearTipoComponent,
  },
  {
    path: 'editarTipoId/:id',
    component: CrearTipoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoidentificacionRoutingModule { }

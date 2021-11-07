import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTipodesComponent } from './crear-tipodes/crear-tipodes.component';
import { VerTipodestinoComponent } from './ver-tipodestino/ver-tipodestino.component';

const routes: Routes = [
  {
    path: 'tipoDestinos',
    component: VerTipodestinoComponent,
  },
  {
    path: 'crearTipoDestinos',
    component: CrearTipodesComponent,
  },
  {
    path: 'editarTipoDestinos/:id',
    component: CrearTipodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposdestinosRoutingModule { }

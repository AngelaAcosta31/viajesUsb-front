import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDetalleComponent } from './crear-detalle/crear-detalle.component';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';

const routes: Routes = [
  {
    path: 'detallePlan',
    component: VerDetalleComponent,
  },
  {
    path: 'crearDetallePlan',
    component: CrearDetalleComponent,
  },
  {
    path: 'editarDetallePlan/:id',
    component: CrearDetalleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleplanRoutingModule { }

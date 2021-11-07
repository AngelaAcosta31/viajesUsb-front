import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { ListadoPlanComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'plan',
    component: ListadoPlanComponent,
  },
  {
    path: 'crearPlan',
    component: CrearPlanComponent,
  },
  {
    path: 'editarPlan/:id',
    component: CrearPlanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }

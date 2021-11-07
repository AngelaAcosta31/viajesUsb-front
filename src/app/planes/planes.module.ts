import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { ListadoPlanComponent } from './listado/listado.component';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListadoPlanComponent,
    CrearPlanComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    MaterialModule
  ],
  exports: [
    ListadoPlanComponent,
    CrearPlanComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlanesModule { }

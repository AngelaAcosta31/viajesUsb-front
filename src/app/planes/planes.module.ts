import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { ListadoPlanComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ListadoPlanComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ],
  exports: [
    ListadoPlanComponent,
  ]
})
export class PlanesModule { }

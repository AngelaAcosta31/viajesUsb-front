import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleplanRoutingModule } from './detalleplan-routing.module';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { CrearDetalleComponent } from './crear-detalle/crear-detalle.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    VerDetalleComponent,
    CrearDetalleComponent,
  ],
  imports: [
    CommonModule,
    DetalleplanRoutingModule,
    MaterialModule
  ],
  exports: [
    VerDetalleComponent,
    CrearDetalleComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetalleplanModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleplanRoutingModule } from './detalleplan-routing.module';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { CrearDetalleComponent } from './crear-detalle/crear-detalle.component';


@NgModule({
  declarations: [
    VerDetalleComponent,
    CrearDetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleplanRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetalleplanModule { }

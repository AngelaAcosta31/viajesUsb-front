import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleplanRoutingModule } from './detalleplan-routing.module';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';


@NgModule({
  declarations: [
    VerDetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleplanRoutingModule
  ]
})
export class DetalleplanModule { }
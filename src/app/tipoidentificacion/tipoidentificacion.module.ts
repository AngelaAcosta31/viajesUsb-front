import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoidentificacionRoutingModule } from './tipoidentificacion-routing.module';
import { VerTipoidComponent } from './ver-tipoid/ver-tipoid.component';


@NgModule({
  declarations: [
    VerTipoidComponent,
  ],
  imports: [
    CommonModule,
    TipoidentificacionRoutingModule
  ]
})
export class TipoidentificacionModule { }

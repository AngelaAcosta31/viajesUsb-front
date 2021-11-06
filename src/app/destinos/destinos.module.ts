import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { ListadoDestinosComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ListadoDestinosComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule
  ],
  exports: [
    ListadoDestinosComponent,
  ]
})
export class DestinosModule { }

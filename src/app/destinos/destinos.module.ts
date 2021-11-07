import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { ListadoDestinosComponent } from './listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { CrearDestinoComponent } from './crear-destino/crear-destino.component';


@NgModule({
  declarations: [
    ListadoDestinosComponent,
    CrearDestinoComponent,
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    MaterialModule
  ],
  exports: [
    ListadoDestinosComponent,
    CrearDestinoComponent

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DestinosModule { }

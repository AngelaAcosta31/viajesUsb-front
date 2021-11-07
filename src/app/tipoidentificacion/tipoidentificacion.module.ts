import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoidentificacionRoutingModule } from './tipoidentificacion-routing.module';
import { VerTipoidComponent } from './ver-tipoid/ver-tipoid.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    VerTipoidComponent,
    CrearTipoComponent,
  ],
  imports: [
    CommonModule,
    TipoidentificacionRoutingModule,
    MaterialModule,
  ],
  exports:[
    VerTipoidComponent,
    CrearTipoComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TipoidentificacionModule { }

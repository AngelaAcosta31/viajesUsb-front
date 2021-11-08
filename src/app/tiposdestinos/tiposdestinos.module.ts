import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposdestinosRoutingModule } from './tiposdestinos-routing.module';
import { VerTipodestinoComponent } from './ver-tipodestino/ver-tipodestino.component';
import { CrearTipodesComponent } from './crear-tipodes/crear-tipodes.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    VerTipodestinoComponent,
    CrearTipodesComponent
  ],
  imports: [
    CommonModule,
    TiposdestinosRoutingModule,
    MaterialModule
  ],
  exports:[
    VerTipodestinoComponent,
    CrearTipodesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TiposdestinosModule { }

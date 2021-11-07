import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposdestinosRoutingModule } from './tiposdestinos-routing.module';
import { VerTipodestinoComponent } from './ver-tipodestino/ver-tipodestino.component';
import { CrearTipodesComponent } from './crear-tipodes/crear-tipodes.component';


@NgModule({
  declarations: [
    VerTipodestinoComponent,
    CrearTipodesComponent
  ],
  imports: [
    CommonModule,
    TiposdestinosRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TiposdestinosModule { }

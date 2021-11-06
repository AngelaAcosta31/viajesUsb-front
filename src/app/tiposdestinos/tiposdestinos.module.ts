import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposdestinosRoutingModule } from './tiposdestinos-routing.module';
import { VerTipodestinoComponent } from './ver-tipodestino/ver-tipodestino.component';


@NgModule({
  declarations: [
    VerTipodestinoComponent
  ],
  imports: [
    CommonModule,
    TiposdestinosRoutingModule
  ]
})
export class TiposdestinosModule { }

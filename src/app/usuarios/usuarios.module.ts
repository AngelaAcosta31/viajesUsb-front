import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';


@NgModule({
  declarations: [
    VerUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }

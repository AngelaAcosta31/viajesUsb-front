import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    VerUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UsuariosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';


@NgModule({
  declarations: [
    ListadoComponent,
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule
  ],
  exports: [
    ListadoComponent,
    CrearClienteComponent
  ]
})
export class ClientesModule { }

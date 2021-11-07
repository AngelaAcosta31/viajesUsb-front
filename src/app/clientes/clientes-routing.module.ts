import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [

  {
    path: 'clientes',
    component: ListadoComponent,
  },
  {
    path: 'crearCliente',
    component: CrearClienteComponent,
  },
  {
    path: 'editarCliente/:id',
    component: CrearClienteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

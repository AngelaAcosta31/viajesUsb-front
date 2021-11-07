import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';

const routes: Routes = [

  {
    path: 'usuarios',
    component: VerUsuarioComponent,
  },
  {
    path: 'crearUsuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'editarUsuario/:id',
    component: CrearUsuarioComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }

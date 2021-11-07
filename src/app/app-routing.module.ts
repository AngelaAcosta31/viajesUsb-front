import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    pathMatch:'full',
    redirectTo:'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'destinos',
    loadChildren: () => import('./destinos/destinos.module').then(m => m.DestinosModule)
  },
  {
    path: 'menuPrincipal',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then(m => m.PaginaPrincipalModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalleplan/detalleplan.module').then(m => m.DetalleplanModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule)
  },
  {
    path: 'tipoId',
    loadChildren: () => import('./tipoidentificacion/tipoidentificacion.module').then(m => m.TipoidentificacionModule)
  },
  {
    path: 'tipoDestinos',
    loadChildren: () => import('./tiposdestinos/tiposdestinos.module').then(m => m.TiposdestinosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

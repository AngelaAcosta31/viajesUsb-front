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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

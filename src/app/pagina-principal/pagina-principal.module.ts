import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
  ]


})
export class PaginaPrincipalModule { }

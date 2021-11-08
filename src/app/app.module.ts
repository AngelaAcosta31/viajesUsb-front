import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { DestinosModule } from './destinos/destinos.module';
import { PlanesModule } from './planes/planes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './pagina-principal/navbar/navbar.component';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginaPrincipalModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { DestinosModule } from './destinos/destinos.module';
import { PlanesModule } from './planes/planes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pagina-principal/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearTipodesComponent } from './tipodestinos/crear-tipodes/crear-tipodes.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearTipodesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

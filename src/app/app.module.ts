import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaComponent } from './components/lista/lista.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    EstudiantesComponent,
    FondoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap:  [ HeaderComponent, ListaComponent, EstudiantesComponent, FondoComponent, FormComponent]
})
export class AppModule { }

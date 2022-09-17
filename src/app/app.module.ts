import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaComponent } from './components/lista/lista.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    EstudiantesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap:  [ HeaderComponent, ListaComponent, EstudiantesComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    HeaderComponent,
    FondoComponent,
    InscripcionesComponent,
    FormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FondoComponent,InscripcionesComponent,EstudiantesComponent, FormularioComponent]
})
export class AppModule { }

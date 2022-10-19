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
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BooleanPipe } from './pipes/boolean.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuscarcursoPipe } from './pipes/buscarcurso.pipe'
 import {  MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    HeaderComponent,
    FondoComponent,
    InscripcionesComponent,
    FormularioComponent,
    BooleanPipe,
    BuscarcursoPipe,
    DialogComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FondoComponent,InscripcionesComponent,EstudiantesComponent, FormularioComponent]
})
export class AppModule { }

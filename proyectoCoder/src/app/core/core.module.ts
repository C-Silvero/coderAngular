import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule} from '../material.module';
import { FondoComponent } from './components/fondo/fondo.component';
import { SesionService } from './services/sesion.service';




@NgModule({
  declarations: [
    FondoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ], 
  providers: [
    SesionService,
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }

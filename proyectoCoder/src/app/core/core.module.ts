import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule} from '../material.module';
import { FondoComponent } from './components/fondo/fondo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FondoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }

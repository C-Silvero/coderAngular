import { NgModule } from '@angular/core';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
   
  ],
  imports: [
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
  exports: [
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
  ]
})
export class MaterialModule { }

import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogData, EstudiantesComponent } from '../estudiantes/estudiantes.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formPersona: FormGroup = this.fb.group(
    {
      nombre:[null,Validators.required],
      edad:[null,Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<EstudiantesComponent>,
    private fb:FormBuilder
  ) { }
  
  ngOnInit(): void {
    
  }

  guardar() {
    this.dialogRef.close(this.formPersona.value)
  }

  
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Usuario } from 'src/app/models/estudiantes';
// import { OK, Usuario } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario[] = [
    {usuario: '', nombre: '', apellido: ''}
  ]


  form: FormGroup

  constructor(
    private fb: FormBuilder, 
    // private usuario: Usuario
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }

  @ViewChild(MatTable) table!: MatTable<Usuario>;

  dataSource7= [...this.usuario]
  displayedColumns2: string[] =['usuario', 'nombre', 'apellido', 'acciones']

    agregarUsuario() {
      this.dataSource7.push(this.form.value)
      this.table.renderRows();
    }
    

    removeData(index:number) {
      this.dataSource7.splice(index,1);
      this.table.renderRows();
    }
    

}

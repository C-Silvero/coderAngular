import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/estudiantes';
import { EstudiantesService } from "../../services/estudiantes.service";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario[] = [
    {id: 37,  img: '', nombre: '', apellido: ''}
  ]


  form: FormGroup

  constructor(
    private fb: FormBuilder, 
    private usuarioService: EstudiantesService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      // id debe ser mayor a estudiantes.lenght
      id: [ , Validators.required],
      img: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }

  @ViewChild(MatTable) table!: MatTable<Usuario>;

  dataSource7= [...this.usuario]
  displayedColumns2: string[] =[ 'id', 'img', 'nombre', 'apellido',]

    agregarUsuario(){
      const estudiante: Usuario = {
        id: this.form.value.id,
        img : this.form.value.img,
        nombre : this.form.value.nombre,
        apellido : this.form.value.apellido,
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estudiante agregado',
        showConfirmButton: false,
        timer: 1000
      })
      this.usuarioService.agregarUsuario(estudiante)
      this.router.navigate(['/estudiantes'])
    }


    
}

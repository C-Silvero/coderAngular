import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { EstudiantesService } from '../../services/estudiantes.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  
  form!: FormGroup

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudiantesService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.form = this.fb.group({
        id: new FormControl (parametros.get('id') , [Validators.required]),
        img: new FormControl (parametros.get('img'), [Validators.required]),
        nombre: new FormControl (parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl (parametros.get('apellido'), [Validators.required])
      })
    })
    console.log(this.form);
    
  }

  

  editarEstudiante(){

    const estudiante: Estudiante = {
      id: this.form.value.id,
      img : this.form.value.img,
      nombre : this.form.value.nombre,
      apellido : this.form.value.apellido,
    }
    console.log(estudiante);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Estudiante editado',
      showConfirmButton: false,
      timer: 1000
    })
    this.estudianteService.editarEstudiante(estudiante)
    this.router.navigate(['/estudiantes'])
  }
  

}

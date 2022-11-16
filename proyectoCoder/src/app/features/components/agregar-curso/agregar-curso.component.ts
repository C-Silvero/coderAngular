import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inscripciones } from 'src/app/models/inscripciones';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  form!: FormGroup

  constructor(
    private cursoService: CursoService,
    private routes: Router
  ) 
  {
    this.form = new FormGroup({
      id: new FormControl(''),
      img: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      contenido: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit(): void {
  }

  agregarCurso() {
    const curso: Inscripciones = {
      id: this.form.value.id,
      img: this.form.value.img,
      nombre: this.form.value.nombre,
      contenido: this.form.value.contenido,
      fecha: this.form.value.fecha,
    }
    console.log(curso);
    this.cursoService.agregarCurso(curso);
    this.routes.navigate(['cursos'])
    
  }
  
}

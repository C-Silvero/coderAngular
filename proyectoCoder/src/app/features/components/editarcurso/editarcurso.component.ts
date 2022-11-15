import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscripciones } from 'src/app/models/inscripciones';
import { CursoService } from '../../services/curso.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editarcurso',
  templateUrl: './editarcurso.component.html',
  styleUrls: ['./editarcurso.component.css']
})
export class EditarcursoComponent implements OnInit {

  form! : FormGroup
  curso! : Inscripciones

  constructor(
    private activatedRoute: ActivatedRoute,
    private routes : Router,
    private cursoService: CursoService

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)

      this.curso = {
        nombre: parametros.get('nombre') || '',
        img: parametros.get('img') || '',
        fecha: parametros.get('fecha') || '',
        contenido: parametros.get('contenido') || '',
      }

      console.log(this.curso);
      

      this.form = new FormGroup({
        nombre: new FormControl(this.curso.nombre, [Validators.required]),
        fecha: new FormControl(this.curso.fecha),
        contenido: new FormControl(this.curso.contenido),
        img: new FormControl(this.curso.img),
      });
    })
  }


  editarCurso(){

    const c: Inscripciones = {
      nombre: this.form.value.nombre,
      contenido: this.form.value.contenido,
      fecha: this.form.value.fecha,
      img: this.form.value.img,
    }

    this.cursoService.editarCurso(c);

    this.routes.navigate(['cursos'])
    this.cursoService.obtenerCursos()
    console.log(c);
   }
   

}



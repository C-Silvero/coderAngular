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
      

      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        img: parametros.get('img') || '',
        fecha: parametros.get('fecha') || '',
        contenido: parametros.get('contenido') || '',
      }

      
      

      this.form = new FormGroup({
        id: new FormControl(this.curso.id),
        nombre: new FormControl(this.curso.nombre, [Validators.required]),
        fecha: new FormControl(this.curso.fecha),
        contenido: new FormControl(this.curso.contenido),
        img: new FormControl(this.curso.img),
      });
    })
  }


  editarCurso(){

    let c: Inscripciones = {
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      contenido: this.form.value.contenido,
      fecha: this.form.value.fecha,
      img: this.form.value.img,
    }
    this.cursoService.editarCurso(c);
    this.routes.navigate(['cursos']);
    
   }
   

}



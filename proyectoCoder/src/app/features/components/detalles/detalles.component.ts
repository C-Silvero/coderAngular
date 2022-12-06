import { Component, OnInit } from '@angular/core';
import { Inscripciones } from 'src/app/models/inscripciones';
import { Observable } from 'rxjs'
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  curso! : Inscripciones
  cursos$!: Observable<Inscripciones[]>;

  constructor(
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
    private routes : Router,
   
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
      
    })
    
  } 
      
}  

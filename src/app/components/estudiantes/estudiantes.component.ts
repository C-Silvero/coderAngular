import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public ESTUDIANTE: Array<Estudiantes> = [
    {
      img: './assets/usuarioh.webp',
      nombre: 'Pedro',
      apellido: 'Rodriguez',
      calificacion: 7,
    },
    {
      img: './assets/usuariof.webp',
      nombre: 'Agustina',
      apellido: 'Sanchez',
      calificacion: 6,
    },
    {
      img: './assets/usuarioh.webp',
      nombre: 'Lautaro' ,
      apellido: 'Duhalde' ,
      calificacion: 9 ,
    },
    {
      img: './assets/usuariof.webp',
      nombre: 'Emilia',
      apellido: 'Figueredo',
      calificacion: 10,
    },
    {
      img: './assets/usuarioh.webp',
      nombre: 'Luis',
      apellido: 'Junior',
      calificacion: 5,
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

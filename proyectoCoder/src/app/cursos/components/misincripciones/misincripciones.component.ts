import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MisInscripciones } from 'src/app/models/inscripciones';

@Component({
  selector: 'app-misincripciones',
  templateUrl: './misincripciones.component.html',
  styleUrls: ['./misincripciones.component.css']
})
export class MisincripcionesComponent implements OnInit {

  curso : MisInscripciones[] = [
    {
      fecha: new Date(2022, 8, 12), nombre: '123',  acciones: 'as'
    }
  ]

  dataSource = [...this.curso]
  displayedColumns: string[] = ['fecha', 'nombre', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

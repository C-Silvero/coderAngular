import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursosinscriptos',
  templateUrl: './cursosinscriptos.component.html',
  styleUrls: ['./cursosinscriptos.component.css']
})
export class CursosinscriptosComponent implements OnInit {

  
  displayedColumns = ['img', 'nombre', 'apellido', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
    
  }

}

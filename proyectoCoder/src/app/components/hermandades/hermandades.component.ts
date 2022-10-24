import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OK, RUR, HSS, JOX, EEK, PNK, Usuario} from 'src/app/models/estudiantes';
import { MatTable } from '@angular/material/table';
// import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Dialog } from '@angular/cdk/dialog';
// import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  name: string;
  apellido: string;
}

@Component({
  selector: 'app-hermandades',
  templateUrl: './hermandades.component.html',
  styleUrls: ['./hermandades.component.css']
})
export class HermandadesComponent implements OnInit {
  name!: string;
  apellido!: string;
  // hermandades

  usuario: Usuario[] = [
    {foto: '', nombre: '', apellido: ''}
  ]

   ok : OK[] = [
    
    { img: './assets/mikew.png', nombre: 'Mike', apellido: 'Wazowski', capitan:false},
    {img: './assets/solli.png', nombre: 'James .P', apellido: 'Sullivan', capitan:false},
    { img: './assets/Terry_teri.webp', nombre: 'Terry y Terri', apellido: 'Perry', capitan:false},
    {img: './assets/art.png', nombre: 'Art', apellido: '', capitan:false},
    { img: './assets/doncarlton.png', nombre: 'Don', apellido: 'Carlton', capitan:true},
    { img: './assets/Squishy.png', nombre: 'Scott', apellido: 'Squibbles', capitan:false},
  ]

  rur : RUR[] = [
    {img: './assets/rur1.png', nombre: 'Johnny ', apellido: 'Worthignton III', capitan:true},
    {img: './assets/rur2.png', nombre: 'Randall', apellido: 'Boggs', capitan:false},
    {img: './assets/rur3.png', nombre: 'Chet', apellido: 'Alexander', capitan:false},
    {img: './assets/rur4.png', nombre: 'Reggie', apellido: 'Jacobs', capitan:false},
    {img: './assets/rur5.png', nombre: 'Javier', apellido: 'Ríos', capitan:false},
    {img: './assets/rur6.png', nombre: 'Chip', apellido: 'Golf', capitan:false},
  ]

  hss : HSS[] = [
    {img: './assets/h1.png', nombre: 'Rosie ', apellido: 'Levin', capitan:true},
    {img: './assets/h2.png', nombre: 'Nadya', apellido: 'Petrov', capitan:false},
    {img: './assets/h3.png', nombre: 'Sonia', apellido: 'Lewis', capitan:false},
    {img: './assets/h4.png', nombre: 'Susan', apellido: 'Jensen', capitan:false},
    {img: './assets/h5.png', nombre: 'Rhonda', apellido: 'Boyd', capitan:false},
    {img: './assets/h6.png', nombre: 'Nancy', apellido: 'Kim', capitan:false},
  ]

  jox : JOX[] = [
    {img: './assets/j1.png', nombre: 'George ', apellido: 'Anderson', capitan:false},
    {img: './assets/j2.png', nombre: 'Roy', apellido: 'O Growlahan', capitan:true},
    {img: './assets/j3.png', nombre: 'Baboso ', apellido: 'Goreleyu', capitan:false},
    {img: './assets/j4.png', nombre: 'Dick', apellido: 'Pratt', capitan:false},
    {img: './assets/j5.png', nombre: 'Omar', apellido: 'Harris', capitan:false},
    {img: './assets/j6.png', nombre: 'Percy', apellido: 'Boleslav', capitan:false},
  ]

  eek : EEK[] = [
    {img: './assets/e1.png', nombre: 'Violet ', apellido: 'Steslicki', capitan:false},
    {img: './assets/e2.png', nombre: 'Donna ', apellido: 'Soohoo', capitan:false},
    {img: './assets/e3.png', nombre: 'Brynn ', apellido: 'Larson ', capitan:false},
    {img: './assets/e4.png', nombre: 'Maria ', apellido: 'Garcia', capitan:false},
    {img: './assets/e5.png', nombre: 'Carla ', apellido: 'Delgado', capitan:true},
    {img: './assets/e6.png', nombre: 'Debbie ', apellido: 'Gabler', capitan:false},
  ]

  pnk : PNK [] = [
    {img: './assets/p1.png', nombre: 'Carrie', apellido: 'Williams', capitan:true},
    {img: './assets/p2.png', nombre: 'Naomi ', apellido: 'Jackson ', capitan:false},
    {img: './assets/p3.png', nombre: 'Heather', apellido: ' Olson ', capitan:false},
    {img: './assets/p4.png', nombre: 'Crystal ', apellido: 'Du Bois', capitan:false},
    {img: './assets/p5.png', nombre: 'Britney  ', apellido: 'Davis ', capitan:false},
    {img: './assets/p6.png', nombre: 'Taylor', apellido: ' Holbrook ', capitan:false},
  ]

  dataSource= [...this.ok]
  dataSource2= [...this.rur]
  dataSource3= [...this.hss]
  dataSource5: MatTableDataSource<EEK> = new MatTableDataSource<EEK>(this.eek)
  dataSource4: MatTableDataSource<JOX> = new MatTableDataSource<JOX>(this.jox)
  dataSource6: MatTableDataSource<PNK> = new MatTableDataSource<PNK>(this.pnk)
  


  // distribucion de la tabla
  displayedColumns: string[] = ['img', 'nombre', 'apellido', 'capitan', 'acciones'];
  

  @ViewChild(MatTable) table!: MatTable<OK>;

  

  constructor( 
    
  ) { }
  
  ngOnInit(): void {
  }


 


  removeData(index:number) {
    this.dataSource.splice(index,1);
    this.table.renderRows();
  }
  
  agregarUsuario( usuario: Usuario) {
    this.usuario.unshift(usuario)
  }

  
}

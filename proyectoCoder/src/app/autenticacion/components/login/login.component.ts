import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from '../../../core/services/sesion.service';
import Swal from 'sweetalert2';import { UsuarioLogin } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  form: FormGroup

  constructor(
    private sesionService: SesionService,
    private routes: Router,
  ) { 
    this.form = new FormGroup({
      nombre: new FormControl('Carlos', Validators.required),
      password: new FormControl('angularC', Validators.required),
      admin: new FormControl(true)
    })
  }

  ngOnInit(): void {

  }
  
  login(){
    if ( this.form.value.nombre != 'Carlos') {
      alert('error')
    } else {
      this.sesionService.login(this.form.value.nombre, this.form.value.password, this.form.value.admin)
      
      this.routes.navigate(['inicio'])
    }
    
  }


}

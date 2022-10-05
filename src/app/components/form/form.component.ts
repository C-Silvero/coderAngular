import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario = this.formBuilder.group({
    nombre: ['' , [Validators.required]],
    apellido: ['' , [Validators.required]],
    password: ['' , [Validators.required, Validators.pattern('^.*[A-Z]+.*$')]],
    email: ['' , [Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,3}$')]],
    habilidades: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  enviarFormulario(): void {
    console.log(this.formulario);
    
  }

}

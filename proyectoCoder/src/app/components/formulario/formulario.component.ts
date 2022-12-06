import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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
    
    
  }
}

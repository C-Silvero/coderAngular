import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearUsuarioComponent } from './crear-usuario.component';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario es inválido cuando no están todos los campos completos', () => {
    const formulario = component.form

    const nombre = formulario.controls['nombre']

    nombre.setValue('Carlos')

    expect(formulario.valid).toBeFalse()

  })

});

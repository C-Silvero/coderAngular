import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisincripcionesComponent } from './misincripciones.component';

describe('MisincripcionesComponent', () => {
  let component: MisincripcionesComponent;
  let fixture: ComponentFixture<MisincripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisincripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisincripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

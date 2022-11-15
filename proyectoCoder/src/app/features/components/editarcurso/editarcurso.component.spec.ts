import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcursoComponent } from './editarcurso.component';

describe('EditarcursoComponent', () => {
  let component: EditarcursoComponent;
  let fixture: ComponentFixture<EditarcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

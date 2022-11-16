import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosinscriptosComponent } from './cursosinscriptos.component';

describe('CursosinscriptosComponent', () => {
  let component: CursosinscriptosComponent;
  let fixture: ComponentFixture<CursosinscriptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosinscriptosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosinscriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

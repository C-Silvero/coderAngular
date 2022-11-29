import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InscripcionesState } from 'src/app/models/inscripciones.state';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<InscripcionesState>(
  fromCursos.cursosFeatureKey
);

export const selectCursos = createSelector(
  selectCursosState,
  (estado: InscripcionesState) => estado.cursos
)
export const selectStateCargando = createSelector(
  selectCursosState,
  (estado: InscripcionesState) => estado.cargando
)
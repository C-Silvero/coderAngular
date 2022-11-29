import { Action, createReducer, on } from '@ngrx/store';
import { InscripcionesState } from 'src/app/models/inscripciones.state';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export const estadoInicial: InscripcionesState = {
  cargando: false,
  cursos: [],
}

export const reducer = createReducer(
  estadoInicial,
  on(CursosActions.loadCursoss, (estado) => {
      return {...estado, cargando: true}
    }),
    on(CursosActions.loadCursossSuccess, (estado, {cursos}) => {
      return {...estado, cargando: false, cursos}
  }),
  on(CursosActions.loadCursossFailure, (estado, {error}) => {
      return estado 
  })
)


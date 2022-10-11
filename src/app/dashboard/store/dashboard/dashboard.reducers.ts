import { createReducer, on } from '@ngrx/store';
import * as DasbhboardActions from './dashboard.actions';
import { HeaderStatusModel } from './models/header-status.model';

const initialState: HeaderStatusModel = {
  status: ''
}

export const dasbhboardReducers = createReducer(
  initialState,
  on(DasbhboardActions.setHeaderStateToEdit, (state) => ({
    ...state,
    status: 'Edit'
  }))
);

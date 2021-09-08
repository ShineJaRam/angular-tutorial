import { createSelector } from '@ngrx/store';
import { RootState } from 'src/mockup';
import { adapter } from './animal.reducer';

const { selectAll } = adapter.getSelectors();

export const selectAnimals = createSelector(
  (state: RootState) => state.animal,
  selectAll
);

export const tmpSelector = createSelector(
  (state: RootState) => state.animal,
  animal => animal.selectedAnimal
);

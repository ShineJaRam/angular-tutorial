import { createSelector } from '@ngrx/store';
import { RootState } from 'src/mockup';
import { adapter } from './marvel.reducer';

const { selectAll } = adapter.getSelectors();

export const selectMarvelHeroes = createSelector(
  (state: RootState) => state.marvel,
  selectAll
);

export const tmpSelector = createSelector(
  (state: RootState) => state.marvel,
  hero => hero.selectedHero
);

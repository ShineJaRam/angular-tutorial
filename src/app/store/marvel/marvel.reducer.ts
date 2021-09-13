import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { animals, MarvelHero, marvelHeroes } from 'src/mockup';
import { chooseHero, fetchHeroes } from './marvel.action';

export interface selectedHeroes extends EntityState<MarvelHero> {
  selectedHero: string;
}

export const adapter: EntityAdapter<MarvelHero> =
  createEntityAdapter<MarvelHero>({
    selectId: hero => hero.name,
  });

export const initialState: selectedHeroes = adapter.getInitialState({
  selectedHero: marvelHeroes[0].name,
});

export const marvelHeroReducer = createReducer(
  initialState,
  on(fetchHeroes, state => {
    return adapter.setAll(marvelHeroes, state);
  }),
  on(chooseHero, (state, { getHero }) => {
    return {
      ...state,
      selectedHero: getHero,
    };
  })
);

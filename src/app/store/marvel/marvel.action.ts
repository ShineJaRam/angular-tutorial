import { createAction, props } from '@ngrx/store';

export const fetchHeroes = createAction('[Marvel Component] heroFetch');
export const chooseHero = createAction(
  '[Marvel Component] heroChoose',
  props<{ getHero: string }>()
);

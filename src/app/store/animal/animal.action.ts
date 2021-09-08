import { createAction, props } from '@ngrx/store';
import { Animal } from 'src/mockup';

export const fetchAnimals = createAction('[Animal Component] animalFetch');
export const chooseAnimal = createAction(
  '[Animal Component] animalChoose',
  props<{ getValue: string }>()
);

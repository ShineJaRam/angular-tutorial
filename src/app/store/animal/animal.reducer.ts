import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal, animals } from 'src/mockup';
import { chooseAnimal, fetchAnimals } from './animal.action';

export interface SelectedAnimal extends EntityState<Animal> {
  selectedAnimal: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>({
  selectId: animal => animal.name,
});

export const initialState: SelectedAnimal = adapter.getInitialState({
  selectedAnimal: animals[0].name,
});

const _animalReducer = createReducer(
  initialState,
  on(fetchAnimals, state => {
    return adapter.setAll(animals, state);
  }),
  on(chooseAnimal, (state, { getValue }) => {
    return {
      ...state,
      selectedAnimal: getValue,
    };
  })
);

export const animalReducer = (state: any, action: any) => {
  return _animalReducer(state, action);
};

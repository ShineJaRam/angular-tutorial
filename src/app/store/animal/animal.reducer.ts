import { createReducer, createSelector, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal, animals, RootState } from 'src/mockup';
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
    // return adapter.setAll(animals, {...state, selectedAnimal: getValue})
    return {
      ...state,
      selectedAnimal: getValue,
    };
  })
);

export const animalReducer = (state: any, action: any) => {
  return _animalReducer(state, action);
};

const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export const selectAnimals = createSelector(
  (state: RootState) => state.animal,
  selectAll
);

export const tmpSelector = createSelector(
  (state: RootState) => state.animal,
  animal => animal.selectedAnimal
);

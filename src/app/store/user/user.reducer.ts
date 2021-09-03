import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  State,
} from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item, items } from 'src/mockup';
import { fetchUsers } from './user.actions';

export interface Title extends EntityState<Item> {
  selectedTitle: string | null;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: item => item.title,
});

export const initialState: Title = adapter.getInitialState({
  selectedTitle: null,
});

const _userReducer = createReducer(
  initialState,
  on(fetchUsers, state => {
    return adapter.setAll(items, state);
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export const selectUsers = createSelector(
  (state: { counter: number; user: Title }) => state.user,
  selectAll
);

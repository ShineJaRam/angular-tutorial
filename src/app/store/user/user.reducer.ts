import { createReducer, on, State } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item, items } from 'src/mockup';

export interface Title extends EntityState<Item> {
  selectedTitle: string | null;
}

export const selectTitle = (item: Item) => {
  return item.title;
};

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: selectTitle,
});

export const initialState = items;

const _userReducer = createReducer(initialState);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

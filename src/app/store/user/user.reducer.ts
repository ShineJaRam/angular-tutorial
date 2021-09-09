import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item, items } from 'src/mockup';
import { fetchUsers } from './user.actions';

export interface User extends EntityState<Item> {
  selectedUser: string | null;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: item => item.title,
});

export const initialState: User = adapter.getInitialState({
  selectedUser: null,
});

export const userReducer = createReducer(
  initialState,
  on(fetchUsers, state => {
    return adapter.setAll(items, state);
  })
);

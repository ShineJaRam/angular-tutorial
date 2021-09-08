import { createSelector } from '@ngrx/store';
import { adapter, User } from './user.reducer';

const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

export const selectUsers = createSelector(
  (state: { counter: number; user: User }) => state.user,
  selectAll
);

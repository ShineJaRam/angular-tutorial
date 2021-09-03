import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

interface State extends EntityState<{ counter: number }> {
  counter: number;
}

const adapter: EntityAdapter<{ counter: number }> =
  createEntityAdapter<{ counter: number }>();

export const initialState: State = adapter.getInitialState({
  counter: 0,
});

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, state => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, state => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

import { expect, test } from 'vitest';
import { reducer, StateType, TOGGLE_COLLAPSED } from './reducer';

test('collapsed must be true', () => {
  //data
  const state: StateType = {
    collapsed: false,
  };

  //action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  //exception
  expect(newState.collapsed).toBe(true);
});

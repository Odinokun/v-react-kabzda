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

test('collapsed must be false', () => {
  const state: StateType = {
    collapsed: true,
  };
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  expect(newState.collapsed).toBe(false);
});

test('check for invalid action name', () => {
  const state: StateType = {
    collapsed: true,
  };
  expect(() => reducer(state, { type: 'WRONG_ACTION' })).toThrowError();
});

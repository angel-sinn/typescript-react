import { Todo, Action, ActionTypes } from '../actions';
// import {  ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};

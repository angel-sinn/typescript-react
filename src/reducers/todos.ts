import { Todo, Action, ActionTypes } from '../actions';
// import {  ActionTypes } from '../actions/types';

// Action is a type union
export const todosReducer = (state: Todo[] = [], action: Action) => {
  // acts as type guard - reduces number of diff cases inside type union
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

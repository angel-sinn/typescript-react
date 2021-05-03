import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

// type alias & type union
export type Action = FetchTodosAction | DeleteTodoAction;

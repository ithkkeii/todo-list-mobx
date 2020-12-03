export interface Todo {
  name: string;
}

export interface ITodoListStore {
  todoList: Todo[];
  addTodo(name: string): void;
  removeTodo(name: string): void;
}

import { makeAutoObservable } from "mobx";
import { Todo, ITodoListStore } from "./todo.types";

class TodoListStore implements ITodoListStore {
  todoList: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(name: string) {
    this.todoList.push({ name });
  }

  removeTodo(name: string) {
    this.todoList = this.todoList.filter((item) => item.name !== name);
  }
}

export const todoListStore = new TodoListStore();

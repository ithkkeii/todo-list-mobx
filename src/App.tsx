import React from "react";
import TodoContainer from "./features/todo-list/TodoContainer";
import { todoListStore } from "./features/todo-list/todo-list.store";

function App() {
  return <TodoContainer todoListStore={todoListStore} />;
}

export default App;

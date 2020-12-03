import { observer } from "mobx-react";
import React from "react";
import { ITodoListStore } from "./todo.types";

const TodoContainer = observer(
  ({ todoListStore }: { todoListStore: ITodoListStore }) => {
    const handleAddTodo = () => {
      const name = prompt("Enter name") || "";
      todoListStore.addTodo(name);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          padding: 20,
        }}
      >
        <div>
          <div style={{ display: "inline-block", marginRight: 10 }}>
            My Todo
          </div>
          <button onClick={handleAddTodo}>add</button>
        </div>
        {todoListStore.todoList.map((todo) => (
          <div>
            {todo.name}
            <button
              style={{ textTransform: "uppercase" }}
              onClick={() => todoListStore.removeTodo(todo.name)}
            >
              delete
            </button>{" "}
          </div>
        ))}
      </div>
    );
  },
);

export default TodoContainer;

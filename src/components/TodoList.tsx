import React, { FC } from "react";
import { ITask } from "../interfaces/interfaces";

interface IProps {
  todos: ITask[];
  deleteTodo(toto_id: number): void;
  completeTodo(todo_id: number): void;
}

const TodoList: FC<IProps> = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div className={`todo ${todo.complete ? "complete" : ""}`} key={index}>
          <div className="todo-name">{todo.taskName}</div>
          <div className="todo-btn">
            <button onClick={() => deleteTodo(todo.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button onClick={() => completeTodo(todo.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

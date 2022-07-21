import React, { FC, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITask } from "./interfaces/interfaces";

import "./App.css";

const App: FC = () => {
  const [status, setStatus] = useState<string>('ALL')
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [filterTodoList, setFilterTodoList] = useState<ITask[]>([]);

  const addTask = (task: ITask): void => {
    setTodoList([...todoList, task]);
  };

  const deleteTodo = (todoId: number): void => {
    setTodoList(todoList.filter((task) => task.id !== todoId));
  };

  const completeTodo = (todo_id: number): void => {
    const updateTodo = todoList.map((todo) => {
      if (todo.id === todo_id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodoList(updateTodo);
  };

  useEffect(() => {
    filterTodos(status)
  }, [todoList, status])

  const filterTodos = (filter: string) => {
    switch (filter) {
      case "PENDING":
        setFilterTodoList(todoList.filter((todo) => !todo.complete));
        break;
      case "DONE":
        setFilterTodoList(todoList.filter((todo) => todo.complete));
        break;
      default:
        setFilterTodoList(todoList);
    }
  };

  return (
    <div>
      <TodoForm addTask={addTask} status={status} setStatus={setStatus} filterTodos={filterTodos} />
      <TodoList
        todos={filterTodoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;

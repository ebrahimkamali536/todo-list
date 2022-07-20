import React, { FC, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITask } from "./interfaces/interfaces";

import "./App.css";

const App: FC = () => {

  const [todoList, setTodoList] = useState<ITask[]>([]);

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

  const filterTodos = (filter: string) => {
    console.log(filter)
    
  }

  return (
    <div>
      <TodoForm addTask={addTask} filterTodos={filterTodos} />
      <TodoList
        todos={todoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;

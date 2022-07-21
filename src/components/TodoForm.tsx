import React, { FormEvent, useState } from "react";
import { ITask } from "../interfaces/interfaces";

interface IStatus {
  status: string,
  setStatus(e: string): void
}

interface Props {
  addTask(task: ITask): void;
  filterTodos(filter: string): void;
  status: string
  setStatus(e: string): void
}

const TodoForm = ({ addTask, filterTodos, status, setStatus }: Props) => {

  const [task, setTask] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addTask({
      taskName: task,
      id: Math.floor(Math.random() * 1000),
    });
    setTask("");
  };

  const handelFilter = (e: any) => {
    filterTodos(e.target.id)
    setStatus(e.target.id)
    console.log(e.target.id)
  }
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add Task ..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={submitHandler}>
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      <div className="filter" onClick={() => setIsOpen(!isOpen)}>
        <div className="status">{status}</div>
        <div id={status} onClick={handelFilter} className={`filter-section ${isOpen ? "open" : "hidden"}`}>
          <span id="ALL">All</span>
          <span id="PENDING">Pending</span>
          <span id="DONE">Done</span>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;

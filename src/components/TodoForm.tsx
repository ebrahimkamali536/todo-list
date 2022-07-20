import React, { FormEvent, useState } from "react";
import { ITask } from "../interfaces/interfaces";
interface Props {
    addTask(task: ITask): void
    filterTodos(filter: string) : void
}

const TodoForm = ({addTask, filterTodos}: Props) => {
    const [task, setTask] = useState<string>('');
    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        addTask({
            taskName: task,
            id: Math.floor(Math.random() * 1000)
        })
        setTask('')
    }
    const clickHandler = () => {
      console.log('click')
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
        <button onClick={submitHandler}>click</button>
      </div>
      <div>
        <div>filter</div>
        <div>
          <span onClick={() => filterTodos("ALL")}>ALL</span>
          <span onClick={() => filterTodos("PENDING")}>Pending</span>
          <span onClick={() => filterTodos("DONE")}>Done</span>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;

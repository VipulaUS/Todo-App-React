import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };

  console.log("tasklisk", taskList);

  const delTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((taskShow) => taskShow.id != id));
  };

  const compTask = (e, id) => {
    e.preventDefault();

    const findElement = taskList.findIndex((element) => element.id == id);

    const newTaskList = [...taskList];

    newTaskList[findElement] = {
      ...newTaskList[findElement],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo-container">
      <h1>Add Task</h1>
      <input
        type="text"
        className="enterTask"
        id="enterTask"
        onChange={taskHandler}
      ></input>
      <button className="addBtn" onClick={addTask}>
        Add
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((taskShow) => (
            <li
              className={taskShow.isCompleted ? "taskComp" : "listitem"}
              key={taskShow.id}
            >
              {taskShow.value}
              <button
                className="btnCompleted"
                onClick={(e) => compTask(e, taskShow.id)}
              >
                Completed
              </button>
              <button
                className="btnDelete"
                onClick={(e) => delTask(e, taskShow.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Todo;

import React, { useState } from 'react';
import './Todo.css';

function Todo() {

        const [task, setTask] = useState("");

        let taskArray = [];


        const taskHandler = (e) => {
            setTask(e.target.value)
        };

        const addTask = () => {
            taskArray.push(task);
            console.log(taskArray);
        };

  return (
    <div className='todo-container'>
        <h1>Add Task</h1>
        <input type="text" className='enterTask' id= "enterTask" onChange={taskHandler}></input>
        <button className='addBtn' onClick={addTask}>Add</button>

    </div>
  )
}

export default Todo
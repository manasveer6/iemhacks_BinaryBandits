import React from "react";
import dailyTasks from "../../data/dailyTasks";
import Task from "../Task";
import '../../style.css';
import '../../checkbox.css';

function createTask(task) {
    return (
        <Task key={task.id} id={task.id} name={task.name} difficulty={task.difficulty}/>
    )
}

function Daily() {
    return <div className="card">
    <p className="title">Daily</p>
    <div className="task-list">
    {dailyTasks.map(createTask)}
    </div>
  </div>;
}

export default Daily;
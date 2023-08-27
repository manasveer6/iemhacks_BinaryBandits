import React, { useState } from "react";
import dailyTasks from "../../data/dailyTasks";
import Task from "../Task";
import '../../style.css';
import '../../checkbox.css';

function createTask(task) {
    const dailyID = "daily-" + task.id;
    return (
        <Task key={task.id} id={dailyID} name={task.name} difficulty={task.difficulty}/>
    )
}

let dailyListSetter = () => {
    console.log("brr");
}

let dailyListOutside;

function Daily() {

    const [dailyList, setDailyList] = useState(dailyTasks);
    
    dailyListOutside = dailyList;
    dailyListSetter = setDailyList;

    return <div className="card">
    <p className="title">Daily</p>
    <div className="task-list">
    {dailyList.map(createTask)}
    </div>
  </div>;
}

export default Daily;
export {dailyListOutside, dailyListSetter};
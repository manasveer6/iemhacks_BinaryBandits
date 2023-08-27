import React, { useState } from "react";
import monthlyTasks from "../../data/monthlyTasks";
import Task from "../Task";
import '../../style.css';
import '../../checkbox.css';

function createTask(task) {
    const dailyID = "monthly-" + task.id;
    return (
        <Task key={task.id} id={dailyID} name={task.name} difficulty={task.difficulty}/>
    )
}

let monthlyListSetter = () => {
    console.log("brr");
}

let monthlyListOutside;

function Monthly() {

    const [monthlyList, setMonthlyList] = useState(monthlyTasks);
    
    monthlyListOutside = monthlyList;
    monthlyListSetter = setMonthlyList;

    return <div className="card">
    <p className="title">Monthly</p>
    <div className="task-list">
    {monthlyList.map(createTask)}
    </div>
  </div>;
}

export default Monthly;
export {monthlyListOutside, monthlyListSetter};
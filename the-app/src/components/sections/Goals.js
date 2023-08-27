import React, { useState } from "react";
import goalsTasks from "../../data/goalsTasks";
import Task from "../Task";
import '../../style.css';
import '../../checkbox.css';

function createTask(task) {
    const goalsID = "goals-" + task.id;
    return (
        <Task key={task.id} id={goalsID} name={task.name} difficulty={task.difficulty}/>
    )
}

let goalsListSetter = () => {
    console.log("brr");
}

let goalsListOutside;

function Goals() {

    const [goalsList, setGoalsList] = useState(goalsTasks);
    
    goalsListOutside = goalsList;
    goalsListSetter = setGoalsList;

    return <div className="card">
    <p className="title">Goals</p>
    <div className="task-list">
    {goalsList.map(createTask)}
    </div>
  </div>;
}

export default Goals;
export {goalsListOutside, goalsListSetter};
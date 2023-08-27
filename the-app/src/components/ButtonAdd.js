import React from "react";
import "../style.css";

function ButtonAdd({ togglePopup }) {
    return <div className="d-flex flex-row-reverse">
        <button id="add-task" onClick={() => togglePopup(prevState => !prevState)}> + Add Task</button>
    </div>
}

export default ButtonAdd;
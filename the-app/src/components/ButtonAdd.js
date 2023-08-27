import React from "react";

function ButtonAdd({ togglePopup }) {
    return <div className="d-flex flex-row-reverse">
    <button id="add-task" onClick={() => togglePopup(prevState => !prevState)}> + Add Task</button>
    </div>
}

export default ButtonAdd;
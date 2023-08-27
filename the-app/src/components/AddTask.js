import React, { useState } from "react";
import ButtonAdd from './ButtonAdd';
import '../style.css';

function AddTask() {

    const [isPopupVisible, togglePopup] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        togglePopup(!isPopupVisible);
    }
    return (<>
        <ButtonAdd togglePopup={togglePopup} />

        <div className={`add-container ${isPopupVisible ? '' : 'hidden'}`}>
            <div className="form-container">
                <div className="logo-container">Add Task</div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskname">Task name</label>
                        <input
                            type="text"
                            id="taskname"
                            name="taskname"
                            placeholder="Enter the task "
                            required=""
                        />
                        <label htmlFor="difficulty">Difficulty</label>
                        <select id="difficulty" name="difficulty">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <label htmlFor="duedate">Due Date</label>
                        <input
                            type="date"
                            id="duedate"
                            name="duedate"
                            required=""
                        />
                    </div>
                    <button className="form-submit-btn" type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    </>
    );
};

export default AddTask;
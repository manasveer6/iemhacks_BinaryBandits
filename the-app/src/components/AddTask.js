import React, { useState } from "react";
import ButtonAdd from './ButtonAdd';
import '../style.css';
import { dailyListOutside, dailyListSetter } from "./sections/Daily";

function AddTask() {

    const [isPopupVisible, togglePopup] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDifficulty, setTaskDifficulty] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        togglePopup(!isPopupVisible);

        let difficulyValue;

        switch (taskDifficulty) {
            case 'easy':
                difficulyValue = 0;
                break;
            case 'medium':
                difficulyValue = 1;
                break;
            case 'hard':
                difficulyValue = 2;
                break;
            default: console.error("Something happened in AddTask.js");
        }

        const newTask = {
            id: (dailyListOutside.length + 1),
            name: taskName,
            difficulty: difficulyValue
        };
        console.log(newTask);

        dailyListSetter((ls) => [...ls, newTask]);

        setTaskName("");
        setTaskDifficulty("");
    }

    function handleClick() {
        const popup = document.getElementsByClassName("add-container")[0];
        popup.classList.add("hidden");
        togglePopup(!isPopupVisible);
        setTaskName("");
        setTaskDifficulty("");
    }
    return (<>
        <ButtonAdd togglePopup={togglePopup} />

        <div className={`add-container ${isPopupVisible ? '' : 'hidden'}`}>
            <div className="form-container">
                <button onClick={handleClick} id="close-btn"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply" /></button>
                <div className="logo-container">Add Task</div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskname">Task name</label>
                        <input
                            type="text"
                            id="taskname"
                            name="taskname"
                            placeholder="Enter the task "
                            required
                            value={taskName}
                            onChange={(e) => {
                                setTaskName(e.target.value);
                            }}
                        />
                        <label htmlFor="difficulty">Difficulty</label>
                        <select
                            id="difficulty"
                            name="difficulty"
                            required
                            value={taskDifficulty}
                            onChange={(e) => {
                                setTaskDifficulty(e.target.value);
                            }}
                        >
                            <option value="" disabled selected hidden>Choose a difficulty</option>
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
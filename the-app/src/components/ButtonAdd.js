import React from "react";
import { dailyListOutside, dailyListSetter } from "./sections/Daily";
import { monthlyListOutside, monthlyListSetter } from "./sections/Monthly";
import { goalsListOutside, goalsListSetter } from "./sections/Goals";
import "../style.css";

function ButtonAdd({ togglePopup }) {

    function resetIDs(list) {
        for(var i=1; i<=list.length; i++) {
            list[i-1].id = i;
        }
    }

    function removeChecked() {

        let tempDailyList = dailyListOutside;
        let tempMonthlyList = monthlyListOutside;
        let tempGoalsList = goalsListOutside;

        tempDailyList = tempDailyList.filter((_, index) => {
            let checkbox = document.getElementById("daily-"+(index+1));
            return !checkbox.checked;
        });
        resetIDs(tempDailyList);
        dailyListSetter(tempDailyList);

        tempMonthlyList = tempMonthlyList.filter((_, index) => {
            let checkbox = document.getElementById("monthly-"+(index+1));
            return !checkbox.checked;
        });
        resetIDs(tempMonthlyList);
        monthlyListSetter(tempMonthlyList);

        tempGoalsList = tempGoalsList.filter((_, index) => {
            let checkbox = document.getElementById("goals-"+(index+1));
            return !checkbox.checked;
        });
        resetIDs(tempGoalsList);
        goalsListSetter(tempGoalsList);
    }

    return <div className="d-flex flex-row-reverse btns">
        <button id="remove-task" onClick={removeChecked}> - Remove Task</button>
        <button id="add-task" onClick={() => togglePopup(prevState => !prevState)}> + Add Task</button>
    </div>
}

export default ButtonAdd;
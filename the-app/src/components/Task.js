import React from "react";
import '../style.css';

function Task(props) {
    return <div className="task-item">
        <div className="checkbox-wrapper">
  <input className="task-checkbox" id={props.id} name="checkbox" type="checkbox" />
  <label className="terms-label" htmlFor={props.id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      className="checkbox-svg"
    >
      <mask fill="white" id="path-1-inside-1_476_5-37">
        <rect height={200} width={200} />
      </mask>
      <rect
        mask="url(#path-1-inside-1_476_5-37)"
        strokeWidth={40}
        className="checkbox-box"
        height={200}
        width={200}
      />
      <path
        strokeWidth={15}
        d="M52 111.018L76.9867 136L149 64"
        className="checkbox-tick"
      />
    </svg>
    <span className="label-text">{props.name}</span>
    <div className={"diff-"+props.difficulty}></div>
  </label>
</div>

    </div>
}

export default Task;
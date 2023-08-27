import React from "react";
import Daily from "./sections/Daily";
import Monthly from "./sections/Monthly";
import Goals from "./sections/Goals";
import '../style.css';

function Sections() {
    return (
        <section className="section tasks">
  <Daily/>
  <Monthly/>
  <Goals/>
  <div className="card">
    <div className="progress-bar">
      <progress
        value={70}
        min={0}
        max={100}
        style={{ visibility: "hidden", height: 0, width: 0 }}
      >
        75%
      </progress>
    </div>
    <div className="rewards">
      <div className="threshold 50">
        <input type="checkbox" />
        reward at 50%
      </div>
      <div className="threshold 75">
        <input type="checkbox" />
        reward at 75%
      </div>
      <div className="threshold 100">
        <input type="checkbox" />
        reward at 100%
      </div>
    </div>
  </div>
</section>
    );
};

export default Sections;
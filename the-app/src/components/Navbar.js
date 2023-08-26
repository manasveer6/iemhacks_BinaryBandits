import React from "react";
import '../style.css';

function Navbar() {
    return (<div className="navbar">
    <div className="navleft">
      <a href="https://www.google.com">IEM hacks</a>
      <a href="https://www.google.com">Tasks</a>
      <a href="https://www.google.com">Help</a>
    </div>
    <div className="navright">
      <a href="https://www.google.com">User</a>
    </div>
  </div>);
};

export default Navbar;
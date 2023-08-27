import React, { useState } from "react";
import ButtonAdd from './ButtonAdd';
import '../style.css';

function AddTask() {

    const [isPopupVisible, togglePopup] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        togglePopup(!isPopupVisible);
    }
    return ( <>
    <ButtonAdd togglePopup={togglePopup}/>

    <div className={`add-container ${isPopupVisible ? '' : 'hidden'}`}>
        <div className="form-container">
            <div className="logo-container">Forgot Password</div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required=""
                    />
                </div>
                <button className="form-submit-btn" type="submit">
                    Send Email
                </button>
            </form>
            <p className="signup-link">
                Don't have an account?
                <a href="/" className="signup-link link">
                {" "}
                Sign up now
                </a>
            </p>
        </div>
    </div>
</>
    );
};

export default AddTask;
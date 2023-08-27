import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import AddTask from "./components/AddTask";

function App() {
    return (<div>
        <Navbar/>
        <Profile/>
        <AddTask/>
        <Sections/>
        <hr/>
        <Footer/>
    </div>);
};

export default App;
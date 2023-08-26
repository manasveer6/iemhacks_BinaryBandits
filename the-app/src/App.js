import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import AddTask from "./components/AddTask";
import ButtonAdd from "./components/ButtonAdd";

function App() {
    return (<div>
        <Navbar/>
        <Profile/>
        <AddTask/>
        <ButtonAdd/>
        <Sections/>
        <Footer/>
    </div>);
};

export default App;
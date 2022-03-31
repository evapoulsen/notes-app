import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />    
        </div>
    )
}

export default App;


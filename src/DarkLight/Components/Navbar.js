import React from "react";
import { Form } from "react-bootstrap";


function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="navLogo_icon"
                src={props.darkMode ? "./images/logodark.svg" : "./images/awdlogo.svg"}
                fill={"red"}
                alt="AWD Logo"
            />
            <h3 className="navLogo_text">Advanced Web Development</h3>
            <Form className="toggler">
            <p>Light&nbsp;&nbsp;</p>
                <Form.Check 
                type="switch" 
                onClick={props.toggleDarkMode} />
                <p>Dark </p>
            </Form>
        </nav>
    )
}

export default Navbar;


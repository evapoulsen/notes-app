import React from "react";

function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="mainTitle">Topics Covered in the Course (To the date)</h1>
            <ul className="mainFacts">
                <li>Unit 1</li>
                <ul>
                <li>Git</li>
                <li>Node and NPM</li>
                <li>Bootstrap 5</li>
                <ul>
                    <li>Navigation</li>
                    <li>Breadcrumbs</li>
                    <li>Buttons</li>
                    <li>Forms</li>
                    <li>Tables</li>
                    <li>Cards</li>
                    <li>Images</li>
                    <li>Media</li>
                    <li>Alerts and Batches</li>
                    <li>JavaScript Components</li>
                </ul>
                <li>CSS Preprocessor SASS</li>
                <li>Building and Deployment</li>
                </ul>
                <li>Unit 2</li>
                <ul>
                    <li>Introduction to ReactJS</li>
                    <ul>
                        <li>Architecture</li>
                        <li>Starter React Applications</li>
                    </ul>
                    <li>React DOM</li>
                    <li>JSX</li>
                    <li>Components</li>
                    <ul>
                        <li>Functional Components</li>
                        <li>Class Components</li>
                        <li>Parent-Child Components</li>
                    </ul>
                    <li>React Navigation</li>
                    <ul>
                        <li>React Route</li>
                        <li>BrowserRouter</li>
                        <li>Route</li>
                        <li>Routes</li>
                        <li>Link</li>
                    </ul>
                    <li>Build Distribution Folders</li>
                    <li>Stateful Components</li>
                    <ul>
                        <li>Props</li>
                        <li>State</li>
                        <li>Events</li>
                        <li>Lifecycle Methods</li>
                        <li>Conditional Rendering</li>
                    </ul>
                    <li>API</li>
                    <ul>
                        <li>Using APIs</li>
                        <li>Fetching Data from APIs</li>
                        <li>SOAP vs REST</li>
                    </ul>
                    <li>React Forms</li>
                        <li>...</li>
                </ul>
            </ul>
            
        </main>
    )
}

export default Main;
import React from "react";
import "./style.css"

function Nav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <h1 className="title">{props.title}</h1>
                </li>
                <li className="message"><h4>{props.message}</h4></li>
                {/* <li><h4>Score: {props.score}</h4></li>
                <li><h4>High Score: {props.highScore}</h4></li> */}
            </ul>
        </nav>
    ); // end return
} // end Nav

export default Nav;
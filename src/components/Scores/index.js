import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className='container'>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3 score">Score: {props.userScore}</div>
            <div className="col-md-3 score">High Score: {props.highScore}</div>
            <div className="col-md-3"></div>
        </div> {/* end row */}
        </div> /* end container */
    ); // end return
} // end Scores

export default Scores;
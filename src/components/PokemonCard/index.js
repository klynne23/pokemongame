import React from "react";
import "./style.css";

function PokemonCard(props) {
    return (
        <div className="card"
        onClick={()=> props.handleClick(props.id)}
        >
            <div className="img-container">
                <img alt={props.name} src={props.image}></img>
            </div> {/* end img-container */}
        </div> /* end card */
    ); // end return
}// end POkemonCard

export default PokemonCard;
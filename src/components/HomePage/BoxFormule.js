import React from "react";
import MoreInfo from "./MoreInfo";

function BoxFormule(props) {
    return (
        <div className="container-formule-item">
            <img src={props.urlImage} alt="Formule"/>
            <h2>
                {props.titleLine1} <br />
                <span>
                    {props.titleLine2} <br />
                    {props.titleLine3} <br />
                </span>
            </h2>
            <p className="descriptionBoxFormules">
                {props.description}
            </p>
                <MoreInfo link={props.link} />
        </div>
    )
}

export default BoxFormule;
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import icon from "./img/moped.svg"
import React from "react";

const Card = ({ title, price, description, imageSrc }) => {

    return (
        <div className="card" aria-label="Card">
            <img src={imageSrc} alt={title}></img>
            <div>
                <h3>{title} <span>{price}</span></h3>
                <p>{description}</p>
                <a href="#">Order a delivery<img src={icon} alt="bicycle" aria-label="On Click"></img></a>
            </div>
        </div>
    )
};


export default Card;

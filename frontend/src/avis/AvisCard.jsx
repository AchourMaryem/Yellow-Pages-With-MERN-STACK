import React from "react";
import "./avis-card.css";

const ServiceCard = ({ item }) => {
    const {imgUrl, title, desc} = item;
    return (
        <div className="service__item">
            <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                <img src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
};
export default ServiceCard;
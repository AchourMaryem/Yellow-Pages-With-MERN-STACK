import React from "react";
import { Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import "../shared/restaurant-card.css"


const RestaurantCard = ({restaurant}) => {
    const { _id, name, city, photo, avgRating} = restaurant;
   
    return (
        <div className="restaurant__card">
            <Card>
                <div className="restaurant__img" >
                    <img src={photo} alt="restaurant-img" />
                </div>
                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="entreprise__location d-flex align-items-center gap-1">
                        <i class="ri-map-pin-fill"></i> {city}
                        </span>
                        <span className="entreprise__rating d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i> {avgRating}
                        </span>
                    </div>

                        <h5 className="entreprise_name"><Link to={`/restaurants/${_id}`}>{name}</Link></h5>
                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    
                            <button className="btn yellow_btn ">
                            <Link to={`/restaurants/${_id}`}>En savoir plus</Link>

                            </button>

                        </div>
                </CardBody>
            </Card>
            

        </div>
    )
}
export default RestaurantCard
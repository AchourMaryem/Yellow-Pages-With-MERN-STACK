import React from "react";
import Slider from "react-slick";
import Restaurant from "../../assets/images/rest.jpg"
import Pharmacie  from "../../assets/images/pha.jpg"
import Cafes from "../../assets/images/cafe.jpg"
import Hotels from "../../assets/images/hotels.jpg"
import Agencevoyages from "../../assets/images/agence.jpg"

import "./../Testimonial/testimonial.css"
import { Link } from "react-router-dom";

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:500,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
            },
        ]
    }
    return (
    <Slider {...settings}>

        <div className="testimonial py-4 px-3">
                <img src={Restaurant} className="h-25 rounded-2" alt="" />
                <div className="content_slider">
                
                    <h3 className="location_name"> <Link to={`/restaurants`}>RESTAURANTS</Link></h3>
                    </div>
        </div>

        <div className="testimonial py-4 px-3">
                <img src={Pharmacie} className="h-25 rounded-2" alt="" />
                <div className="content_slider">
                    <h3 className="location_name"> <Link to={`/pharmacies`} >PHARMACIES</Link></h3>
                </div>
        </div>

        <div className="testimonial py-4 px-3">
                <img src={Cafes} className="h-25 rounded-2" alt="" />
                <div className="content_slider">
                    <h3 className="location_name"> <Link to={`/cafes`}>CAFES</Link></h3>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
                <img src={Agencevoyages} className="h-25 rounded-2" alt="" />
                <div className="content_slider">
                    <h3 className="location_name"> <Link to={`/travelagencies`}>Agence de voyages</Link></h3>
                </div>
        </div>
        <div className="testimonial py-4 px-3">
                <img src={Hotels} className="h-25 rounded-2" alt="" />
                <div className="content_slider">
                    <h3 className="location_name"> <Link to= {`/hotels`} >HOTELS</Link></h3>
                </div>
        </div>


    </Slider>
    );

};
export default Testimonials;

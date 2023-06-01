import React from "react";
import ServiceCard from "./AvisCard";
import { Col } from "reactstrap";

import africaImg from '../assets/images/africa.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl:africaImg,
        title: "DERBIGUM AFRICA",
        desc: "Je considère pages jaunes comme un complément très utile en marketing digital.",
    },
    {
        imgUrl:guideImg,
        title: "Best Tour Guide",
        desc: "dqdsdqdqsdqse",

    },
    {
        imgUrl:customizationImg,
        title: "Calculate Weather",
        desc: "sdsqsqffsfqsqsfqsfqs",
    },
]



const ServiceList = () => {
    return (
        <>
        {servicesData.map((item,index) => (
            <Col lg='3' key={index}>
                <ServiceCard item = {item} />
            </Col>
        ))}
        </>
    );
};
export default ServiceList;
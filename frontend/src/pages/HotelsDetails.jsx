import React, {useEffect} from "react";
import '../styles/hotel-details.css';
import {Container, Row, Col, Form, ListGroup } from 'reactstrap';
import {useParams} from 'react-router-dom';

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";



const HotelsDetails = () => {

    const {id} = useParams()

    const {data:hotel, loading, error} = useFetch(`${BASE_URL}/hotels/${id}`);


    const {name, city, photo, avgRating, email, contact, desc, address} = hotel;

    useEffect(()=>{
        window.scrollTo(0,0)
    },[hotel])

    return <>
     
     <section>
        <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            { !loading && !error && <Row>
                <Col lg="8">
                <div className="hotel__info" >
                            <h2>{name}</h2>
                    <div className="hotel__content">
                        <img src={photo} alt="" />
                        <div className="d-flex align-items-center gap-5">
                            <span className="entreprise__restaurant d-flex align-items-center gap-1">
                            <i class="ri-map-pin-fill" style={{color: "var(--secondary-color)" }}></i> {city}
                            </span>
                            <span className="entreprise___rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill" style={{color: "var(--secondary-color)" }}></i> {avgRating}
                            </span>

                        </div>
                    </div>
                    <div className="hotel__extra-details">
                    <h6>{address}</h6>
                    <span>
                        <i class="ri-phone-fill" style={{color: "var(--secondary-color)" }}></i> {contact}
                    </span>
                    <span>
                    <i class="ri-mail-fill" style={{color: "var(--secondary-color)" }}></i> {email}
                    </span>
                    <h6>Description</h6>
                    <p>{desc}</p>
                    </div>
                </div>
                
                </Col>
            </Row>
}
        </Container>
     </section>


    </>

};
export default HotelsDetails;

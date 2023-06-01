import React, {useEffect} from "react";
import '../styles/travelagencie-details.css';
import {Container, Row, Col, Form, ListGroup } from 'reactstrap';
import {useParams} from 'react-router-dom';


import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";





const TravelAgenciesDetails = () => {

    const {id} = useParams()

    const {data:travelagencie, loading, error} = useFetch(`${BASE_URL}/travelagencies/${id}`);

    const {name, city, photo, avgRating, email, contact, desc, address} = travelagencie;

    useEffect(()=>{
        window.scrollTo(0,0)
    },[travelagencie])


    return <>
     
     <section>
        <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error &&<Row>
                <Col lg="8">
                <div className="travelagencie__info" >
                            <h2>{name}</h2>
                    <div className="travelagencie__content">
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
                    <div className="travelagencie__extra-details">
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
export default TravelAgenciesDetails;

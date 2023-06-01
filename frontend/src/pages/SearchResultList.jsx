import React, {useState} from "react";
import CommonSection from "../shared/CommonSection";

import { Container, Row, Col  } from "reactstrap";

import { useLocation } from "react-router-dom";
import LocationCard from "./../shared/LocationCard";



const SearchResultList = () => {
    const location = useLocation();
    const [data] = useState(location.state);

    //console.log(data);


    return (
        <>
        <section>
            <Container>
                <Row>
                    {data.length === 0 ? (
                        <h4 className="text-center">No location found </h4>
                    ) : (
                        data?.map(location => (
                            <Col lg="3" className="mb-4" key={location._id}>
                                <LocationCard location={location} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
            
        </section>

       
        </>
    )

};
export default SearchResultList;

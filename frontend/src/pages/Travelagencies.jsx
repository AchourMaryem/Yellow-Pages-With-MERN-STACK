import React, {useState, useEffect} from "react";
import "../styles/travelagencies.css";
import TravelAgencieCard from "../shared/TravelAgencieCard";
import CommonSection from "../shared/travelagencie/CommonSection-travelagencie";
import { Col, Container, Row } from "reactstrap";
import travelData from "../assets/data/travelagencies";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";


const TravelAgencies = () => {

    

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: travelagencie, loading, error} = useFetch(`${BASE_URL}/travelagencies?page=${page}`);

    const {data:travelagencieCount} = useFetch(`${BASE_URL}/travelagencies/search/getTravelAgenciecount`)
    

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(travelagencieCount/ 8)
        SetPageCount(pages)
    },[page, travelagencieCount])
    return (
     <>
    
   
    <section>
        <Container>
            
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error &&<Row>
                {
                     travelagencie?.map(travelagencie => (
                         <Col lg="3" key={travelagencie._id}> 
                         <TravelAgencieCard travelagencie={travelagencie} />
                         </Col>
                    ))}
                    
            </Row>
            }
        </Container>
    </section>

  
    </>
    )
};
export default TravelAgencies;
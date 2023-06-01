import React, {useState, useEffect} from "react";
import "../styles/cafes.css";
import CafeCard from "../shared/CafeCard";

import { Col, Container, Row } from "reactstrap";


import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";



const Cafes = () => {
    
    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: cafe, loading, error} = useFetch(`${BASE_URL}/cafes?page=${page}`);

    const {data:cafeCount} = useFetch(`${BASE_URL}/cafes/search/getCafecount`)
    

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(cafeCount/ 8)
        SetPageCount(pages)
    },[page, cafeCount])

    return (
    <>
      <section>
        <Container>
            
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row>
                {
                    cafe?.map(cafe => (
                    <Col lg="3" key={cafe._id}>
                         <CafeCard cafe={cafe} />
                         </Col>
                    ))}
            </Row>
        }
        </Container>
    </section>
   

    
    </>
    )

};
export default Cafes;
import React, {useState, useEffect} from "react";
import "../styles/hotels.css";
import HotelCard from "../shared/HotelCard";
import { Col, Container, Row } from "reactstrap";
import hotelData from "../assets/data/hotels";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";



const Hotels = () => {
    
   

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: hotels, loading, error} = useFetch(`${BASE_URL}/hotels?page=${page}`);

    const {data:hotelCount} = useFetch(`${BASE_URL}/hotels/search/getHotelcount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(hotelCount/ 8)
        SetPageCount(pages)
    },[page, hotelCount])


    return (
    <>

   
    <section>
        <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row>
            
                {
                    hotels?.map(hotel => (
                    <Col lg="3" key={hotel._id}>
                         <HotelCard hotel={hotel} />
                         </Col>
                    ))}
                

            </Row>
        }
        </Container>
    </section>
   
    </>
    )

};
export default Hotels;

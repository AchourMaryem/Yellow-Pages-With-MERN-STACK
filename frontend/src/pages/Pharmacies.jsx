import React, {useState, useEffect} from "react";
import "../styles/pharmacies.css";
import PharmacieCard from "../shared/PharmacieCard";
import CommonSection from "../shared/pharmacie/CommonSection-pharmacie";
import { Col, Container, Row } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";




const Pharmacies = () => {

    
    



    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: pharmacie, loading, error} = useFetch(`${BASE_URL}/pharmacies?page=${page}`);

    const {data:pharmacieCount} = useFetch(`${BASE_URL}/pharmacies/search/getPharmaciecount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(pharmacieCount/ 8);
        SetPageCount(pages)
    },[page, pharmacieCount])

    return (
    <>
    
   
    <section>
        <Container>
            {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row> 
                {
                         pharmacie?.map(pharmacie => ( 
                        <Col lg="3" key={pharmacie._id}>
                             <PharmacieCard pharmacie={pharmacie} />
                             </Col>
                        ))}
                        
                </Row>

            }
        </Container>
    </section>
 
    </>
    )


};
export default Pharmacies;
import React, {useState, useEffect} from "react";
import "../styles/restaurant.css";
import RestaurantCard from "../shared/RestaurantCard";

import CommonSection from "../shared/restaurant/CommonSection-restaurant";
import restaurantData from "../assets/data/restaurant";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";



const Restaurants = () => {
    
    

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: restaurant, loading, error} = useFetch(`${BASE_URL}/restaurants?page=${page}`);

    const {data:restaurantCount} = useFetch(`${BASE_URL}/restaurants/search/getRestaurantcount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(restaurantCount/ 8)
        SetPageCount(pages)
    },[page, restaurantCount])



    return (
    <>
        
      
        <section className="pt-0">
            <Container>
                
            {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row>
                    {
                        restaurant?.map(restaurant => (
                        <Col lg="3"  className="mb-4" key={restaurant._id}>
                             <RestaurantCard  restaurant={restaurant} />
                        </Col>
                        ))}
                        
                </Row>
            }
            </Container>
        </section>
       
    </>
    )

};
export default Restaurants;

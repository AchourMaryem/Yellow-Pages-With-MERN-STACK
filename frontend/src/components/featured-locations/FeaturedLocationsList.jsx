import React from "react";
import LocationCard from "../../shared/LocationCard";
import {Col} from 'reactstrap';

import useFetch from "./../../hooks/useFetch";
import {BASE_URL} from "./../../utils/config";

const FeaturedLocationsList = () => {
    const {data : recommendedLocations, loading, error} = useFetch(
        `${BASE_URL}/locations/search/getRecommendedLocation`
    );

    

    return (
        <>
            {
                loading && <h4>Loading...</h4>
            }
            {
                error && <h4>{error}</h4>
            }

        {!loading && !error && recommendedLocations?.map(location => (
            <Col lg="3" className="mb-4" key={location._id}>
                <LocationCard location={location} />
            </Col>
        ))}
        </>
    );
        
};
export default FeaturedLocationsList
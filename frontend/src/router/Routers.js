import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import EntrepriseDetails from '../pages/EntrepriseDetails';
import Entreprises from '../pages/Entreprises';
import Restaurants from '../pages/Restaurants';
import Pharmacies from '../pages/Pharmacies';
import Cafes from '../pages/Cafes';
import TravelAgencies from '../pages/Travelagencies';
import Hotels from '../pages/Hotels';
import RestaurantsDetails from "../pages/RestaurantDetails";
import PharmaciesDetails from "../pages/PharmaciesDetails";
import CafesDetails from "../pages/CafesDetails";
import HotelsDetails from "../pages/HotelsDetails";
import TravelAgenciesDetails from "../pages/TravelAgenciesDetails";


const Routers = () => {
    return (
    <Routes>
        <Route path="/" element = {<Navigate to ="/home" />} />
        <Route path="/home" element ={<Home />} />
        <Route path="/entreprises" element ={<Entreprises />} />
        <Route path="/entreprises/:id" element ={<EntrepriseDetails />} />
        <Route path="/restaurants/:id" element ={<RestaurantsDetails />} />
        <Route path="/pharmacies/:id" element ={<PharmaciesDetails />} />
        <Route path="/cafes/:id" element ={<CafesDetails />} />
        <Route path="/hotels/:id" element ={<HotelsDetails />} />
        <Route path="/travelagencies/:id" element ={<TravelAgenciesDetails />} />

        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
        <Route path="/search" element ={<SearchResultList />} />
        <Route path="/restaurants" element ={<Restaurants />} />
        <Route path="/pharmacies" element ={<Pharmacies />} />
        <Route path="/cafes" element ={<Cafes />} />
        <Route path="/travelagencies" element= {<TravelAgencies />} />
        <Route path="/hotels" element = {<Hotels />} />

        
        

    
    </Routes>
    );

};
export default Routers;

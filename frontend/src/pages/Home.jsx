import React from "react";
import '../styles/home.css'


import {Container , Row , Col} from 'reactstrap';

import appImg from '../assets/images/app.png';

import SearchBar from "./../shared/SearchBar";
//import AvisList from "../avis/AvisListe";
import africaImg from '../assets/images/africa.png'
import sopalImg from '../assets/images/sopal.png'
import adbImg from '../assets/images/ADB.png'
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
    return <>
    {/*----------- hero section start---------*/ }
    
    <section>
        <Container>
            <Row>
              

            <div className="container">
        <div className="left">
          <h1>
          Ne vous déplacez plus inutilement, <span>demandez </span> les pages jaunes 
          </h1>
         
        </div>
       
      </div>
 

      </Row>          
        <div className="search">
 <SearchBar />
 </div>
        </Container>



             

                
                
          
        
    </section>

    
    
    {/*------------------- testimonial section start-------------------*/ }


    <section>
        <Container>
     
                    <Testimonials />
         
        </Container>
    </section>



   
    {/*-----------hero section start------------- */}
    <section className="testimonial">
        <div className="container">
            <div className="section-title headline">
                <span className="headline_content">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={africaImg} alt="" />
                                </div>
                                <h2>DERBIGUM AFRICA</h2>
                                <p>Je considère les pages jaunes comme un complément très utile au marketing digital : cela ne prend que quelques clics. Dans la mesure où vos clients et prospects cherchent votre entreprise et la trouvent sur les pages jaunes, autant le faire correctement.</p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={sopalImg} alt="" />

                                </div>
                                <h2>SOPAL</h2>
                                <p>Les pages jaunes sont aussi importantes que les réseaux sociaux, voire plus !</p>

                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={adbImg} alt="" />

                                </div>
                                <h2>ADB, ACOUSTIC DESIGN & BROADCAST</h2>
                                <p>Allez sur les pages jaunes et vous verrez que les petites PME et TPE peuvent également se promouvoir, sans nécessairement acheter d'espace publicitaire aux géants du web tels que Google ou Facebook.</p>

                            </div>                       
                               </div>
                 </span>
            </div>       
        </div>
    </section>
    

    </>

};
export default Home;

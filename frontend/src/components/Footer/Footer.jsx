import React from "react";

import "./footer.css";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import logo11 from "../../assets/images/logo11.png";

const quick__links = [
    {
        path:'/home',
        display:'Home'
    },
    
];

const quick__links2 = [
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
];
const quick__links3 = [
    {
        path:'/restaurants',
        display:'Restaurants'
    },
    {
        path:'/pharmacies',
        display:'Pharmacies'
    },
    {
        path:'/cafes',
        display:'Cafes'
    },

    {
        path:'/travelagencies',
        display:'TravelAgencies'
    },
    {
        path:'/hotels',
        display:'Hotels'
    },
];


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                    
                        <div className="logo">
                            <img src={logo11} alt="" />
                           
                           
                        </div>
                        </Col>
                        <Col lg="3">
                        <h5 className="footer__link-title">Contact</h5>
                            <ListGroup className="footer__quick-links">
                                    <ListGroupItem className="ps-0 border-0 d-flex
                                    align-items-center gap-3"> 
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i class="ri-map-pin-fill"></i>
                                        </span>
                                        Address:
                                    </h6>
                                    <p className="mb-0">Tunis, Sousse</p>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0 d-flex
                                    align-items-center gap-3"> 
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i class="ri-mail-fill"></i>
                                        </span>
                                        Email:
                                    </h6>
                                    <p className="mb-0">yellowpage@gmail.com</p>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0 d-flex
                                    align-items-center gap-3"> 
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i class="ri-phone-fill"></i>
                                        </span>
                                        Phone:
                                    </h6>
                                    <p className="mb-0">+216 54039680</p>
                                    </ListGroupItem>

                            </ListGroup>
                        </Col>  
                        <Col lg="3">
                        <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup className="footer__quick-links">
                                {quick__links2.map((item,index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                            

                        </Col>
                        <Col lg="3">
                        <h5 className="footer__link-title">Activities</h5>
                            <ListGroup className="footer__quick-links">
                                {quick__links3.map((item,index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                       
                        <Col lg="12" className="text-center pt-5">
                            <p className="copyright">All rights reserved <i class="ri-copyright-line"></i>  {year} YellowPages </p>
                        </Col>
                    
                </Row>
            </Container>
        </footer>

    );

};
export default Footer;

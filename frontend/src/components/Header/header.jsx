import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom';

import './header.scss';


function Header() {
    const [active,setActive] = useState(false);
    

    const isActive =()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return()=>{
        window.removeEventListener("scroll",isActive);
    }
},[]);

    return ( 
 <div className={active ? "header active" : "header"}>
        <div className='container'>
            <div className='logo'>
                <Link to="/" className='link'>
                <span className='text'>Page jaune</span>
                </Link>
                <span className='dot'>.</span>

            </div>
        <div className='links'>
            <span>English</span>
            <Link to="/login" className='link'>S'identifier</Link>
            <Link to ="/register" className='link'>S'inscrire</Link>
        </div>

        </div>
    </div>
)   
}
export default Header;


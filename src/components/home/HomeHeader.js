import React, { useEffect, useState, Fragment } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
//import profile from '../../profile.jpg';
//import Navbar from '../../components/navbar/Navbar';
import Nav from '../../components/nav2/Nav';



function HomeHeader({ user, selected }) {
    return (
        <div className='HomeHeader'>
            
            <Nav />
        </div>
    )
}

export default HomeHeader;
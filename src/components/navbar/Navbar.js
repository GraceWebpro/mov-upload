import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../logo.svg';
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";


const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

 return (
   <header className="header">
     <nav className="nav container">
        <div className='logo'>
            <Link to="/" className="nav__logo">
                <img src={logo} alt='logo' width='35' height='35' /> Movie Stream 
            </Link>
       </div>

       <div className={`nav-menu  ${showNavbar && 'active'}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <Link to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </Link>
           </li>
           <li className="nav__item">
             <Link to="/news" className="nav__link"  onClick={closeMenuOnMobile}>
               News
             </Link>
           </li>
           <li className="nav__item">
             <Link
               to="about"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               About Us
             </Link>
           </li>
           <li className="nav__item">
             <Link
               to="/favorite"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Favorite
             </Link>
           </li>
           <li className="nav__item">
             <Link
               to="/location"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Location
             </Link>
           </li>
           <li className="nav__item">
             <Link to="/get-started" className="nav__link nav__cta">
               Get Started
             </Link>
           </li>
         </ul>
         <div className="menu-icon" onClick={handleShowNavbar}>
        <RiMenuUnfold3Fill />
        </div>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <RiCloseLine />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
        <RiMenuUnfold3Fill />

       </div>
     </nav>
   </header>
 );
};

export default Navbar;
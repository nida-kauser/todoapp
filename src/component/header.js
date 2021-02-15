import "./CSS/header.css";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
 
import logo from '../assets/logo.PNG';
import hamburger from '../assets/hamburger.png';
import "reactjs-navbar/dist/index.css";

function Header()  {
  
 
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

 
  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };

   }, []);


   const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

 
    return (
        <header className="Header">
        <img src={logo} className="Logo" alt="logo" />
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/home">Home</a>
            <a href="/">Manage Todo</a>
            <div className="dropdown">
    <button className="dropbtn">Social Handle
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="https://www.linkedin.com/in/nida-kauser-082459bb">LinkedIn</a>
     
    </div>
    </div> 
          
          </nav>
        </CSSTransition>
        
        <img src={hamburger} className="Burger" alt="hamburger"onClick={toggleNav} />
       
      </header>
    );
  }

export default Header;

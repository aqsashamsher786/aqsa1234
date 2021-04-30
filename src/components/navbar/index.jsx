import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import {  NavLink  } from 'react-router-dom'
import './Navbar.css';
const NavbarContainer = styled.div`
  width: 100%;
  height: 3.438rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  float:right;
  top: 0;
  z-index: 999;
  background-color: white;
 
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom-left-radius:5rem;
  border-top-left-radius:5rem;
  border-top-right-radius:5rem;
  border-bottom-right-radius:5rem;
  margin-top:2rem;
  height: 5rem;
  float : right;
  width:37rem;
  margin-top: 3rem;
  background-color:black;
  @media screen and (max-width: 100rem) {
    background-color: transparent;
  }
`;

export function Navbar(props) { 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <NavbarContainer  >
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <a  
          href="/#" 
          duration={500} 
          className='nav-links'
          activeClassName='active'
          onClick={closeMobileMenu}
            >Home</a>
          </li>
          <li className='nav-item'>
          <a  
          href="/#scholarship" 
          duration={500} 
          activeClassName='active'
          className='nav-links'
          onClick={closeMobileMenu}
            >Scholarship</a>
          </li> 
            <li
            className='nav-item'           
          >
            <NavLink
            to= '/internship'
            activeClassName='active'  
           className='nav-links'
           onClick={closeMobileMenu}
            >
              Internship
            </NavLink>
          </li>
          <li
            className='nav-item'           
          >
            <NavLink
            to= '/blog'
            activeClassName='active'  
           className='nav-links'
           onClick={closeMobileMenu}
            >
              Blogs
            </NavLink>
          </li>
          <li className='nav-item'>
          <a  
          href="/#footer" 
          activeClassName='active'
          duration={500} 
          className='nav-links'
          onClick={closeMobileMenu}
            >Contact us</a>
          </li>
          <li className='nav-item'>
          <a  
          href="/#" 
          duration={500} 
          className='nav-links'
          activeClassName='active'
          onClick={closeMobileMenu}
            >Sco</a>
          </li>
         
        </ul>
      </AccessibilityContainer>
    </NavbarContainer></>
  );
}


import React, { useState } from "react";
import styled from "styled-components";
import {FacebookShareButton} from "react-share";
import {FacebookIcon} from "react-share";
import './Navbar.css';
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color:black;
  width: 40%;
  height: 60%;
  margin: 0 auto; 
`;



export function Share(props) { 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
    <Container  >
     
    <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
  </div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li>
    <FacebookShareButton
     url="https://youtu.be/2BnTYEafRQc"
     quote="link"
     >
     <FacebookIcon
       size={40}
       round
     />
</FacebookShareButton>
    </li>
  </ul>
      
    </Container></>
  );
}


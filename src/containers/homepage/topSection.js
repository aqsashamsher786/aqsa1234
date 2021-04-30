import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/s1.PNG";
import { Marginer } from "../../components/marginer";
const TopContainer = styled.div`
  width: 100%;
  height: 29rem;
  padding: 0;
  background-color:black;
  padding-top:3rem;
  padding-bottom:3rem;
  padding-left:3rem;
  padding-right:3rem;
  position: relative;
`;
const PicContainer = styled.div`
 padding-top:2rem;
  width: 100%;
  height: 22rem;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  margin-left:2rem;
  background-color: black;
  flex-direction: column;
  align-content: center;
  @media screen and (max-width: 480px) {

  height: 60%;
  }
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center; 
   @media screen and (max-width: 480px) {
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.2;
  }
`;



export function TopSection(props) {


  return (
    <Element name="topSection">
      <TopContainer>
      <PicContainer>
        <BackgroundFilter>
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Scholarships </MotivationalText>
          <MotivationalText>Our Guidence And Your Potential</MotivationalText>
        </BackgroundFilter>
      </PicContainer></TopContainer>
    </Element>
  );
}


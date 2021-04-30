import React from "react";
import styled from "styled-components";
import { Remotehire  } from "./remotehire";
import { ServicesSection } from "./servicesSection";
import { Parallax } from 'react-parallax';
import image from "../../assets/pictures/s3.jpg";
import { Scholar } from "../../components/Scholar/Scholar";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const ParallaxDiv = styled.div`
  @media screen and (max-width: 480px) {
  display: none;
  }
`;
export function Homepage(props) {
  return (
    <PageContainer>
      <Remotehire />
      <ParallaxDiv>
      <Parallax bgImage = {image} strength ={600}   >
        <div style = {{height:500}} ></div>
      </Parallax></ParallaxDiv>    
      <Scholar/>
      <ServicesSection />
    </PageContainer>
  );
}
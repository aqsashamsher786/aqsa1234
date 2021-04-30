import React from 'react';
import { Button } from '../../globalStyle';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons';
import { Marginer } from "../marginer";
import { Linkt } from "./Linktest";
import {
  
 LinkSection,
 LinkWrapper,
 LinkContainer
} from './testlink';
export function Test() {
  return (
    <Element name="test" id = "test">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <Linkt
           title="Data Governance"
           description="It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights."
           button  = "Choose Plan"
           path='/'/>
              <Marginer direction="horizontal" margin="1rem" />
              <Marginer direction="vertical" margin="1rem" />
             <Linkt
           title="Data Governance"
           description="It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights."
           button  = "Choose Plan"
           path='/'/>
       <Marginer direction="horizontal" margin="1rem" />
              <Marginer direction="vertical" margin="1rem" />
            <Linkt
           title="Data Governance"
           description="It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights."
           button  = "Choose Plan"
           path='/'/>
           
         </LinkContainer></ LinkWrapper>
            <Marginer direction="vertical" margin="1rem" />
            < LinkWrapper> <LinkContainer>
           <Linkt
           title="Data Governance"
           description="It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights."
           button  = "Choose Plan"
           path='/'/> 
            <Marginer direction="horizontal" margin="1rem" />
              <Marginer direction="vertical" margin="1rem" />
            <Linkt
           title="Data Governance"
           description="It is a continuous program that ensures data is recognized and treated as a valuable asset and that it serves users' needs and delivers valuable insights."
           button  = "Choose Plan"
           path='/'/>
          </LinkContainer>
        </ LinkWrapper>
      </LinkSection>
    </IconContext.Provider></Element>
  );
}

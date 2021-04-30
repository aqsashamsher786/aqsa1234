import {Test} from "./test";
import React from "react";
import {  Element } from "react-scroll";
import {
    ScholarSection,
    ScholarWrapper,
    ScholarContainer
  } from './ScholarshipElement';
  

export function Test1(props) {
  return (
    <Element >
         <ScholarSection>
        <ScholarWrapper>
          <ScholarContainer>
          <Test
        title="Master Scholarship."
        description="Our  more than ever, cused solutions to support your hiring in 3 simple steps…"
        button  = "load more.."
        path='/spain'
      />
      
           <Test
        title="Master Scholarship."
        description="Our services e are utilising tech-focused solutions to support your hiring in 3 simple steps…"
        button  = "load more.."
        path='/spain'
      /> 
            <Test
        title="Master Scholarship."
        description="Our  we are utilising tech-focused solutions to support your hiring in 3 simple steps…"
        button  = "load more.."
        path='/spain'
      />
          </ScholarContainer>
        </ ScholarWrapper>
      </ScholarSection>
       </Element>
  );
}
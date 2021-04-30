import React from 'react';
import { Button } from '../../globalStyle';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';
import {
  ScholarSection,
  ScholarWrapper,
  ScholarContainer,
  ScholarCard,
  ScholarCardInfo,
  ScholarCardPlan,
  ScholarCardFeatures,
  ScholarCardFeature
} from './ScholarshipElement';

export function Scholar() {
  return (
    <Element name="ScholarshipSection" id = "scholarship">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ScholarSection>
        <ScholarWrapper>
          <ScholarContainer>
          <ScholarCard to='/bachelor'>
              <ScholarCardInfo>   
                <ScholarCardPlan>Bachelor Scholarship</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>Merit Scholarship for 25% of the Bachelor Students</ScholarCardFeature>
                </ScholarCardFeatures>
                <Button primary>Choose Plan</Button>
              </ScholarCardInfo>
            </ScholarCard>
            <ScholarCard to='/master'>
              <ScholarCardInfo>
                <ScholarCardPlan>Master Scholarship</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>Masters Degree Scholarships 2021 - 2022 Masters Scholarships 2021 - 2022 for international students</ScholarCardFeature>
                </ScholarCardFeatures>
                <Button primary>Choose Plan</Button>
              </ScholarCardInfo>
            </ScholarCard>  </ScholarContainer>
            <ScholarContainer>
            <ScholarCard to='/phd'>
              <ScholarCardInfo>
                <ScholarCardPlan>phD Scholarship</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>A PhD scholarship is an amount of money paid to an individual student to help them complete a PhD</ScholarCardFeature>
                </ScholarCardFeatures>
                <Button primary>Choose Plan</Button>
              </ScholarCardInfo>
            </ScholarCard>
          </ScholarContainer>
        </ ScholarWrapper>
      </ScholarSection>
    
    </IconContext.Provider></Element>
  );
}

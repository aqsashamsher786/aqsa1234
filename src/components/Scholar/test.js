import React from 'react';
import { Button } from '../../globalStyle';
import { NavLink as Link  } from "react-router-dom";
import {  Element} from "react-scroll";
import { IconContext } from 'react-icons/lib';
import {
    
  ScholarCard,
  ScholarCardInfo,
  ScholarCardPlan,
  ScholarCardFeatures,
  ScholarCardFeature
} from './t';

export function Test(props) {
    const {  title,description,button} = props;
  return (
      
    <Element name="test" id = "test">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
 <Link style={{ color :"#807a7a", textDecoration: 'none'} } to={props.path}>
      <ScholarCard > 
              <ScholarCardInfo>   
                <ScholarCardPlan>{title}</ScholarCardPlan>
                <ScholarCardFeatures>
                  <ScholarCardFeature>{description}</ScholarCardFeature>
                </ScholarCardFeatures>
                <Button primary> {button}</Button>
              </ScholarCardInfo>           
          </ScholarCard> 
     </Link>
    </IconContext.Provider></Element>
  );
}

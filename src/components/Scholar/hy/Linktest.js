import React from 'react';
import { Button } from '../../globalStyle';
import { NavLink as Link  } from "react-router-dom";
import {  Element} from "react-scroll";
import { IconContext } from 'react-icons/lib';
import {
  
  LinkCard,
  LinkCardInfo,
  LinkCardPlan,
  LinkCardFeatures,
  LinkCardFeature
} from './testlink';


export function Linkt(props) {
    const {  title,description,button} = props;
  return (
      
    <Element name="test" id = "test">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
 <Link style={{ color :"#807a7a", textDecoration: 'none'} } to={props.path}>
      < LinkCard > 
              < LinkCardInfo>   
                < LinkCardPlan>{title}</ LinkCardPlan>
                 <LinkCardFeature>{description}</LinkCardFeature>
               
                <Button primary> {button}</Button>
              </LinkCardInfo>           
          </ LinkCard> 
     </Link>
    </IconContext.Provider></Element>
  );
}

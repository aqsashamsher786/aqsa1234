import React from "react";
import styled from "styled-components/macro";
import { Marginer } from "../../components/marginer";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  flex-wrap: wrap-reverse;
  width:50%;
  @media screen and (max-width: 30rem) {
    justify-content: center;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  @media screen and (max-width: 30rem) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: black;
  font-size: 1.25rem;
  font-weight: 600;
  width:100%;
  text-align: center;
  margin: 0.313rem ;
  border-left:4rem;
  padding: 1rem;
  @media screen and (max-width: 480px) {
    margin-top: 1.4943961882704rem;
    font-size : 1.20rem;
    padding: 0;
  }
`;

const Details = styled.p`
  color: black;
  font-size: 1.313rem;
  align-items: center;
  margin: 0.313rem ;
  padding: 1rem;
  @media screen and (max-width: 30rem) {
    font-size : 1.20rem;
    padding: 0;
  }
`;

export function OurSerivce(props) {
  const {  title, description, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
      <Marginer direction="vertical" margin="1rem" />
      <div>
        <Title>{title}</Title></div>
        <Details>{description}</Details>
      </DescriptionContainer>
    </ServiceContainer>    
  );
}

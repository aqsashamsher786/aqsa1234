import React from "react";
import styled from "styled-components";
import {  Element } from "react-scroll";
import { IntershipTags } from "../../components/card/InternshipTag";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export function Internship(props) {
  return (
    <Element name="internshipSection" id = "internship">
    <PageContainer>  
    <IntershipTags/>
    </PageContainer>
    </Element>
  );
}
import React from "react";
import styled from "styled-components";
import { BachelorTags } from "../../components/card/BachelorTag";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export function Bachelor(props) {
  return (
    <PageContainer>  
    <BachelorTags/>
    </PageContainer>
  );
}
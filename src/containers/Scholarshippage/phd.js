import React from 'react';
import styled from "styled-components";
import { PhdTags } from "../../components/card/PhdTag";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export function Phd(props) {
    return (
      <PageContainer>
      <PhdTags/>
      </PageContainer>    
    );
  }
  
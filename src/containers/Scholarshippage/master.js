import React from 'react';
import styled from "styled-components";
import { MasterTags } from "../../components/card/MasterTag";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export function Master(props) {
    return (
      <PageContainer>
      <MasterTags/>
      </PageContainer>    
    );
  }
  
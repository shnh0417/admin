import React from 'react';
import styled from 'styled-components';

const PageNavbar = () => {
   return (
      <PageNavbarWrapper>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
      </PageNavbarWrapper>
   );
};

const PageNavbarWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   justify-content: flex-start;
   padding-top: 20px;
   padding-left: 10px;
   max-width: 200px;
   width: 200px;
   border-right: 1px solid #272727;
`;

const PageNavbarDiv = styled.div`
   padding: 10px;
`;

export default PageNavbar;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageNavbar = () => {
   return (
      <PageNavbarWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
         <PageNavbarDiv>Menu1</PageNavbarDiv>
      </PageNavbarWrapper>
   );
};

const PageNavbarWrapper = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   justify-content: flex-start;
   padding: 20px 10px 20px 10px;
   max-width: 200px;
   width: 200px;
   height: 100vh;
   background-color: #13181d;
   border-right: 1px solid #272727;
`;

const PageNavbarDiv = styled.div`
   padding: 10px;
`;

export default PageNavbar;

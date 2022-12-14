import React from 'react';
import { Container } from '../styles/LayoutStyles';
import TokenLogoSvg from 'assets/images/icon_token_logo.svg';

const Main = ({ boxData }) => {
   return (
      <Container backgroundImage={require('assets/images/main_token_bg.png')}>
         <div style={{ position: 'relative' }}>
            <img
               src={TokenLogoSvg}
               alt="background"
               style={{ transform: 'translate(-50%, -50%) scale(1.2, 1.2)', opacity: 1, verticalAlign: 'middle' }}
            />
            {/* <img src={require('assets/images/main_token_bg.png')} alt="background" style={{}} /> */}
         </div>
      </Container>
   );
};

export default Main;

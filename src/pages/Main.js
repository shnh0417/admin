import React from 'react';
import { Container } from 'styles/LayoutStyles';
import TokenLogoSvg from 'assets/images/icon_token_logo.svg';
import { motion } from 'framer-motion';

const Main = ({ boxData }) => {
   return (
      <Container backgroundImage={require('assets/images/main_token_bg.png')}>
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }} //rotate: [0, 90, 180, 270, 360]
            //times: [0.3, 0.5, 1]
            transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
            <div style={{ position: 'relative' }}>
               <img
                  src={TokenLogoSvg}
                  alt="background"
                  style={{ transform: 'scale(1.2, 1.2)', opacity: 1, verticalAlign: 'middle', paddingTop: '15px' }}
               />
               {/* <img src={require('assets/images/main_token_bg.png')} alt="background" style={{}} /> */}
            </div>
         </motion.div>
         <div
            style={{
               flex: 'none',
               display: 'flex',
               width: '100vh',
               position: 'absolute',
               top: '90px',
               left: '90px',
            }}>
            {/* <h1>Caliverse</h1> */}
            <motion.h1
               animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
               transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
               }}
               initial={{ opacity: 0, scale: 0.5 }}
               whileHover={{ scale: 1.2 }}>
               Caliverse
            </motion.h1>
         </div>
      </Container>
   );
};

export default Main;

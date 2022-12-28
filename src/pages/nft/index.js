import React, { useEffect, useRef } from 'react';
import { motion, animate, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Card3d from 'components/ui/Card3d';

// mouse position
const dampen = 60;

const Index = () => {
   const cardRef = useRef();
   const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
   const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

   const rotateX = useTransform(mouseY, (newMouseY) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      const newRotateX = newMouseY - rect.top - rect.height / 2;
      return -newRotateX / dampen;
   });
   const rotateY = useTransform(mouseX, (newMouseX) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      const newRotateY = newMouseX - rect.left - rect.width / 2;
      return newRotateY / dampen;
   });

   /* Gradient */
   const diagonalMovement = useTransform([rotateX, rotateY], ([newRotateX, newRotateY]) => {
      const position = newRotateX + newRotateY;
      return position;
   });
   const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
   const sheenOpacity = useTransform(sheenPosition, [-100, 50, 200], [0, 0.05, 0]);
   const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

   const handleMouseMove = (e) => {
      // animate mouse x and y
      //  animate(mouseX, e.clientX);
      //  animate(mouseY, e.clientY);
      animate(mouseX, e.pageX);
      animate(mouseY, e.pageY);
   };
   // handle mouse move on document
   //    useEffect(() => {

   //       if (typeof window === 'undefined') return;
   //       // recalculate grid on resize
   //       window.addEventListener('mousemove', handleMouseMove);
   //       // cleanup
   //       return () => {
   //          window.removeEventListener('mousemove', handleMouseMove);
   //       };
   //    }, [mouseX, mouseY]);

   return (
      <div>
         <Container onMouseMove={handleMouseMove}>
            <RotationWrapper style={{ rotateX, rotateY }}>
               <DotGrid />
               <CardWrapper ref={cardRef} style={{ backgroundImage: sheenGradient }}>
                  <Card3d />
               </CardWrapper>
            </RotationWrapper>
         </Container>
         <h1>NFT</h1>
      </div>
   );
};

const SIZE = 40;
const Container = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   perspective: 1000px;
`;
const DotGrid = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-size: ${SIZE}px ${SIZE}px;
   background-image: radial-gradient(circle at 1px 1px, white 2px, transparent 0);
   background-position: center;
   transform: translateZ(-300px);
`;

const RotationWrapper = styled(motion.div)`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   transform-style: preserve-3d;
`;

const CardWrapper = styled(motion.div)`
   border-radius: 20px;
   backdrop-filter: blur(3px) brightness(120%);
`;
export default Index;

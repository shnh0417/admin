import { useRef, useState, useEffect, lazy, Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';

import { Container } from 'styles/LayoutStyles';
import useDimensions from 'hooks/useDimensions';
// import Model from 'components/models/Model';
import styled from 'styled-components';

const Model = lazy(() => import('components/models/Model'));

const ThreeModel = () => {
   const [hasMounted, setHasMounted] = useState(false);

   useEffect(() => {
      setHasMounted(true);
   }, []);
   return (
      <Container>
         {/* <span>loading...</span> */}
         {hasMounted && (
            <Suspense fallback={null}>
               <StyledCanvas>
                  {/* <ambientLight intensity={0.5} /> */}
                  <OrbitControls autoRotate={true}>
                     <PerspectiveCamera fov={45} position={[0, 20, 100]} />
                  </OrbitControls>
                  {/* <directionalLight color="red" position={[0, 0, 0]} /> */}
                  <Suspense fallback={null}>
                     {/* <ambientLight /> */}

                     <Model rotate={[-0.04, 0, 0]} scale={2} />
                     <Environment preset="sunset" background />
                     {/* <ambientLight intensity={1} /> */}
                  </Suspense>
               </StyledCanvas>
            </Suspense>
         )}
      </Container>
   );
};

const StyledCanvas = styled(Canvas)`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: 0 auto;
   //    transform: translate(-50%, -50%);
`;

export default ThreeModel;

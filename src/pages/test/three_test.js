import { useRef, useEffect, Suspense } from 'react';

import PageNavbar from './PageNavbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import useDimensions from 'hooks/useDimensions';
import Model from 'components/models/sample';

const Three_test = () => {
   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flex: 1,
               width: '300px',
            }}>
            <Suspense fallback={<span>loading...</span>}>
               <Canvas style={{ display: 'block', width: '300px', height: '300px' }}>
                  <ambientLight intensity={0.5} />
                  <OrbitControls autoRotate={true} />
                  <directionalLight color="red" position={[0, 0, 0]} />
                  <Suspense fallback={null}>
                     <ambientLight />
                     <PerspectiveCamera fov={45} position={[-1.8, 0.6, 2.7]} />
                     <Model rotate={[0, 0, 0]} />
                     <ambientLight intensity={1} />
                  </Suspense>
               </Canvas>
            </Suspense>
         </div>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flex: 1,
               width: '300px',
            }}>
            <Suspense fallback={<span>loading...</span>}>
               <Canvas style={{ display: 'block', width: '300px', height: '300px' }}>
                  <ambientLight intensity={0.5} />
                  <OrbitControls autoRotate={true} />
                  <directionalLight color="red" position={[0, 0, 0]} />
                  <Suspense fallback={null}>
                     <ambientLight />
                     <PerspectiveCamera fov={45} position={[-1.8, 0.6, 2.7]} />
                     <Model position={[0, 0, 0]} />
                     <ambientLight intensity={1} />
                  </Suspense>
               </Canvas>
            </Suspense>
         </div>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flex: 1,
               width: '300px',
            }}>
            <Suspense fallback={<span>loading...</span>}>
               <Canvas style={{ display: 'block', width: '300px', height: '300px' }}>
                  <ambientLight intensity={0.5} />
                  <OrbitControls autoRotate={true} />
                  <directionalLight color="red" position={[0, 0, 0]} />
                  <Suspense fallback={null}>
                     <ambientLight />

                     <Model position={[0, 0, 0]} />
                     <ambientLight intensity={1} />
                  </Suspense>
               </Canvas>
            </Suspense>
         </div>
      </div>
   );
};

export default Three_test;

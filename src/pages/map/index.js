import { useRef, useEffect, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

import PageNavbar from './PageNavbar';

import styled from 'styled-components';
import { Container } from 'styles/LayoutStyles';

import { loadImage, staticNaverMapApi } from 'data/mock/apiDataset';

// Create a client
const queryClient = new QueryClient();

const Index = () => {
   const [isShowLandDetail, setIsShowLandDetail] = useState(false);
   const getImages = async () => {
      console.log('getStaticMap');
      const images = await loadImage();
      console.log(images);
   };

   const showLandDetail = () => {
      setIsShowLandDetail(!isShowLandDetail);
   };

   const getNaverMap = async () => {
      const res = await staticNaverMapApi();
      console.log(await res.json());
   };

   useEffect(() => {
      // getImages();
      // getNaverMap();
   }, []);

   console.log('isShowLandDetail : ', isShowLandDetail);

   return (
      <QueryClientProvider client={queryClient}>
         <Container>
            <PageNavbar />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flex: 1,
                     width: '300px',
                  }}>
                  <div>
                     <NaverMaps></NaverMaps>
                  </div>
                  <div>
                     <button onClick={showLandDetail}>show</button>
                  </div>
               </div>
            </div>
            <AnimatePresence>
               {isShowLandDetail && (
                  <StyledLandModal
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     // transition={{ delay: 0.1 }}
                     layoutScroll>
                     <motion.div layout>
                        <h3>title</h3>
                        <div style={{ height: '2000px' }}></div>
                     </motion.div>
                  </StyledLandModal>
               )}
            </AnimatePresence>
         </Container>
      </QueryClientProvider>
   );
};

function NaverMaps() {
   const naverMapRef = useRef();
   //Access the client
   // const queryClient = useQueryClient();
   // const query = useQuery('naverMaps', staticNaverMapApi);

   useEffect(() => {
      const { naver } = window;
      if (!naverMapRef.current || !naver) return;

      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(37.5656, 126.9769);
      const mapOptions = {
         center: location,
         zoom: 16,
         zoomControl: true,
         zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
         },
      };
      const map = new naver.maps.Map(naverMapRef.current, mapOptions);
      new naver.maps.Marker({
         position: location,
         map,
      });
   }, []);

   return (
      <>
         <div>
            <h1>NaverMap</h1>
            <div ref={naverMapRef} style={{ width: '100vh', height: '500px', zIndex: '1' }}></div>
         </div>
      </>
   );
}

const StyledLandModal = styled(motion.div)`
   border: 1px solid #272727;
   flex: none;
   position: absolute;
   width: 300px;
   display: flex;
   right: 15px;
   height: 100vh;
   padding: 5px 10px;
   overflow: scroll;
   z-index: 1000;
   box-shadow: rgba(146, 255, 0, 0.4) -5px 5px, rgba(146, 255, 0, 0.3) -10px 10px, rgba(146, 255, 0, 0.2) -15px 15px,
      rgba(146, 255, 0, 0.1) -20px 20px, rgba(146, 255, 0, 0.05) -25px 25px;
`;

export default Index;

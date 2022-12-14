import { useRef, useEffect, Suspense, useState } from 'react';

import PageNavbar from './PageNavbar';
import { Container } from 'styles/LayoutStyles';

const Index = () => {
   const [isShowLandDetail, setIsShowLandDetail] = useState(false);
   const getStaticMap = async () => {
      fetch(
         `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?crs=EPSG:4326&scale=1&format=png&w=375&h=258&markers=type:t|pos:126.9616187%2037.507435|label:%EB%8F%99%EC%9E%91%EA%B5%AC,%20%EC%84%9C%EC%B4%88%EA%B5%AC,%20%EA%B4%80%EC%95%85%EA%B5%AC&markers=type:t|color:blue|pos:126.96060539999999%2037.507685699999996|label:%EB%8F%99%EC%9E%91%EA%B5%AC,%20%EC%84%9C%EC%B4%88%EA%B5%AC,%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%B0%A9%EB%A9%B4&markers=type:t|color:0xEE3A3A|pos:126.9616377%2037.506708950000004|label:%EB%8F%99%EC%9E%91%EA%B5%AC,%20%EC%84%9C%EC%B4%88%EA%B5%AC,%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%B0%A9%EB%A9%B4`,
         {
            mode: 'cors',
            crossDomain: true,
            headers: {
               'X-NCP-APIGW-API-KEY-ID': 'ap3an7tzrq',
               'X-NCP-APIGW-API-KEY': 'Bg1IjN1iNnXZQgeJ5OnVyDooyHRFFtIfPlJcbSvw',
               'Content-Type': 'application/json',
            },
         }
      )
         .then((response) => response.json())
         .then((json) => console.log(json));
   };

   const showLandDetail = () => {
      setIsShowLandDetail(!isShowLandDetail);
   };
   useEffect(() => {
      //getStaticMap();
   }, []);
   return (
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
               <h3>text</h3>
               <button onClick={showLandDetail}>show</button>
            </div>
         </div>
         {!isShowLandDetail ? null : (
            <div
               style={{
                  border: '1px solid #272727',
                  flex: 'none',
                  position: 'absolute',
                  width: '300px',
                  display: 'flex',
                  right: '15px',
                  height: '100vh',
                  overflow: 'scroll',
                  boxShadow:
                     'rgba(146, 255, 0, 0.4) -5px 5px, rgba(146, 255, 0, 0.3) -10px 10px, rgba(146, 255, 0, 0.2) -15px 15px, rgba(146, 255, 0, 0.1) -20px 20px, rgba(146, 255, 0, 0.05) -25px 25px',
               }}>
               <div style={{ width: '100%' }}>
                  <h3>title</h3>
               </div>
            </div>
         )}
      </Container>
   );
};

export default Index;

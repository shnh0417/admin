import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Container } from 'styles/LayoutStyles';
import { loadImage } from 'data/mock/apiDataset';
import styled from 'styled-components';

const MyNFT = () => {
   const [nfts, setNfts] = useState([]);
   const getNfts = async () => {
      const { data } = await loadImage();
      console.log(data);
      if (data?.hits.length > 0) {
         setNfts(data?.hits);
      }
   };

   useEffect(() => {
      getNfts();
   }, []);

   return (
      <Container style={{ width: '100%' }}>
         <StyledMotionDiv layout>
            {nfts?.map((nft, index) => (
               <NftCard key={nft.id}>
                  <NftCardImage src={nft.previewURL} alt={nft.tags} />
                  <NftCardInfo>
                     <h2 style={{ margin: 0 }}>{nft.user}</h2>
                     <p style={{ margin: '10px 0', fontSize: '14px', lineHeight: '1.5', color: '#666' }}>{nft.tags}</p>
                  </NftCardInfo>
               </NftCard>
            ))}
         </StyledMotionDiv>
      </Container>
   );
};

const StyledMotionDiv = styled(motion.div)`
   flex: none;
   display: flex;
   flex-direciton: row;
   justify-content: flex-start;
   align-items: flex-start;
   // align-content: flex-start;
   width: 100%;
   flex-wrap: wrap;
   overflow: hidden;
`;

const NftCard = styled.div`
   display: flex;
   flex-wrap: nowrap;
   flex-direction: column;
   align-items: center;
   border: 1px solid #ccc;
   border-radius: 5px;
   margin: 10px;
   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
   // transition: all 0.3s ease;
`;

const NftCardImage = styled.img`
   width: 300px;
   height: 300px;
   object-fit: cover;
   border-radius: 5px 0 0 5px;
`;

const NftCardInfo = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;
export default MyNFT;

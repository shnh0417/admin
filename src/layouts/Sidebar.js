import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import {
   FaMapMarkedAlt as MapIcon,
   FaBtc as CoinIcon,
   FaBuromobelexperte as NftIcon,
   FaDigitalOcean as ThreeIcon,
} from 'react-icons/fa';

const iconStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '48px',
   minWidth: '48px',
   width: '100%',
};

const showSideMenuTitle = {
   // display: 'inline-block',
   // width: '300px',
   display: 'none',
   width: '58px',
};

const Sidebar = () => {
   return (
      <SidebarWrapper>
         <SideMenuWrapper>
            <StyleLink to="/map">
               <SideMenu>
                  <motion.div whileHover={{ scale: 1.5 }} style={iconStyle}>
                     <MapIcon size={21}>icon</MapIcon>
                  </motion.div>
                  <SideMenuButtonText>MAP</SideMenuButtonText>
               </SideMenu>
            </StyleLink>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <StyleLink to="/nft">
               <SideMenu>
                  <motion.div whileHover={{ scale: 1.5 }} style={iconStyle}>
                     <NftIcon size={21}>icon</NftIcon>
                  </motion.div>
                  <SideMenuButtonText>NFT</SideMenuButtonText>
               </SideMenu>
            </StyleLink>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <StyleLink to="/mynft">
               <SideMenu>
                  <motion.div whileHover={{ scale: 1.5 }} style={iconStyle}>
                     <CoinIcon size={21}>icon</CoinIcon>
                  </motion.div>
                  <SideMenuButtonText>MyNFT</SideMenuButtonText>
               </SideMenu>
            </StyleLink>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <StyleLink to="/three">
               <SideMenu>
                  <motion.div whileHover={{ scale: 1.5 }} style={iconStyle}>
                     <ThreeIcon size={21}>icon</ThreeIcon>
                  </motion.div>
                  <SideMenuButtonText>Model</SideMenuButtonText>
               </SideMenu>
            </StyleLink>
         </SideMenuWrapper>
      </SidebarWrapper>
   );
};

const SidebarWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   border-right: 1px solid #272727;
   width: ${showSideMenuTitle.width};
   max-width: 300px;
   heigth: 100%;
   // min-width: 300px;
   background-color: #14181d;
`;

const SideMenuWrapper = styled.div`
   min-height: 56px;
   padding: 4px 3px 4px 4px;
   cursor: pointer;
`;

const SideMenu = styled.div`
   height: 48px;
   position: relative;
   transition: all 0.2s ease-out;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
`;

const SideMenuButtonText = styled.p`
   display: ${showSideMenuTitle.display};
   color: #fff;
   font-size: 16px;
   font-weight: bold;
   line-height: 20px;
   maring-left: 8px;
   text-align: left;
`;

const StyleLink = styled(Link)`
   color: rgba(0, 222, 199, 1);
   // box-sizing: border-box;
   margin: 0 auto;
   text-align: center;
`;
export default Sidebar;

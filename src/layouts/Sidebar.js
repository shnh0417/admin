import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FaMapMarkedAlt as MapIcon } from 'react-icons/fa';

const iconStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '48px',
   minWidth: '48px',
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
            <Link to="/map">
               <SideMenu>
                  <div style={iconStyle}>
                     <MapIcon>icon</MapIcon>
                  </div>
                  <SideMenuButtonText>MAP</SideMenuButtonText>
               </SideMenu>
            </Link>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <SideMenu>
               <div style={iconStyle}>
                  <MapIcon>icon</MapIcon>
               </div>
               <SideMenuButtonText>MENU2</SideMenuButtonText>
            </SideMenu>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <SideMenu>
               <div style={iconStyle}>
                  <MapIcon>icon</MapIcon>
               </div>
               <SideMenuButtonText>MENU3</SideMenuButtonText>
            </SideMenu>
         </SideMenuWrapper>
         <SideMenuWrapper>
            <SideMenu>
               <div style={iconStyle}>
                  <MapIcon>icon</MapIcon>
               </div>
               <SideMenuButtonText>MENU4</SideMenuButtonText>
            </SideMenu>
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

export default Sidebar;

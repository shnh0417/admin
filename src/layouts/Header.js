import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCartArrowDown as CartIcon } from 'react-icons/fa';
import { SlWallet as WalletIcon, SlGlobe as LocaleIcon } from 'react-icons/sl';

import { ReactComponent as Logo } from 'assets/images/logo_c.svg';

const Header = () => {
   const onClickWallet = (e) => {
      e.preventDefault();
      console.log(e.target);
   };
   return (
      <HeaderStyles>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: '0 0 auto', color: '#fff', paddingLeft: '20px' }}>
               <Link to="/">
                  <Logo />
               </Link>
            </div>
            <div style={{ display: 'flex', flex: '0 0 auto', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ padding: '10px', color: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ verticalAlign: 'middle' }}>
                     <Link to="/">Home</Link>
                  </span>
               </div>
               <div style={{ padding: '10px', color: '#fff' }}>
                  <span style={{ verticalAlign: 'middle' }}>
                     <Link to="/about">About</Link>
                  </span>
               </div>
            </div>
            <div
               style={{
                  flex: '0 0 auto',
                  color: '#fff',
                  paddingRight: '20px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
               }}>
               <div style={{ padding: '5px' }}>
                  <LocaleIcon style={{ width: '24px', height: '24px' }} />
               </div>
               <div style={{ padding: '5px' }}>
                  <WalletIcon style={{ width: '24px', height: '24px' }} onClick={onClickWallet} />
               </div>
               <div style={{ padding: '5px' }}>
                  <CartIcon style={{ width: '24px', height: '24px' }} />
               </div>
            </div>
         </div>
      </HeaderStyles>
   );
};

const HeaderStyles = styled.div`
   display: sticky;
   flex: none;
   overflow: hidden;
   color: hsla(0, 100%, 100%, 0.87);
   background-color: #13181d;
   box-shadow: 0px 6px 8px 0px rgb(0 0 0 / 14%), 0px 3px 3px -2px rgb(0 0 0 / 12%), 0px 1px 8px 0px rgb(0 0 0 / 20%);
   height: 40px;
`;

export default Header;

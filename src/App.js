import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import "./App.css";
import { Header, Footer, Sidebar } from 'layouts';
import Main from 'pages/Main';
import About from 'pages/About';
import Map from 'pages/map';
import Nft from 'pages/nft';
import MyNFT from 'pages/auth/nft/MyNFT';
import ThreeModel from 'pages/ThreeModel';

import Global from 'styles/Global';

function App() {
   return (
      <Wrapper>
         <Global />
         <BrowserRouter>
            <Header></Header>
            <AppContainer>
               <Sidebar />
               <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/nft" element={<Nft />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/map" element={<Map />} />
                  <Route path="/mynft" element={<MyNFT />} />
                  <Route path="/three" element={<ThreeModel />} />
               </Routes>
            </AppContainer>
            <Footer></Footer>
         </BrowserRouter>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   width: 100%;
   font-family: 'Roboto Mono', monospace;
   background-color: #343434;
   color: #fff;
   font-size: 15px;
   letter-spacing: 0.01em;
   line-height: normal;
   margin: 0 !important;
   overscroll-behavior: none;
   overflow-y: scroll;
   &::-webkit-scrollbar {
      width: 10px;
   }
   &::-webkit-scrollbar-thumb {
      background-color: #211830;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
   }
   &::-webkit-scrollbar-track {
      background-color: grey;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
      margin-bottom: 20px;
   }
`;

const AppContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: stretch;
   justify-content: flex-start;
   width: 100%;
   height: 100vh;
`;
export default App;

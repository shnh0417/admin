import styled, { css } from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex: 1;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   margin: 10;
   max-width: 100%;
   ${(props) =>
      props.backgroundImage &&
      css`
         background-image: url(${props.backgroundImage});
         // background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         background-color: black !important;
      `}

   @media (min-width: 1024px) {
      flex-wrap: nowrap;
   }
`;

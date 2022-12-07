import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10;
    max-width: 100%;
    height: 100vh;

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

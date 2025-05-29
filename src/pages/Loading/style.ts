import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 36px;
    background: #00000080;
    backdrop-filter: blur(80px);
    -webkit-backdrop-filter: blur(80px); 
    z-index: 1;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
`
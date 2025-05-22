import styled from "styled-components";

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

export const Content = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 1;
  color: white;
`
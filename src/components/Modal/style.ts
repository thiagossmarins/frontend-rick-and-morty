import styled from "styled-components";
import { device } from "../../styles/device";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 359px) 1fr;
  position: relative;
  max-width: 1034px;
  width: 80%;
  height: 100%;
  max-height: 800px;
  background: #000;
  box-shadow: 0px 4px 79px 0px #000000;
  border-radius: 12px;
  padding: 20px;
  z-index: -1;

  @media ${device.laptop} {
    height: 85%;
  }

  @media ${device.ipad} {
    grid-template-columns: 1fr;
    width: 90%;
  }

  @media ${device.mobileS} {
    margin-bottom: -10%;
  }

`;

export const CharacterInfo = styled.p`
  margin: 4px 0;
  font-size: 1.1rem;
`;

export const Container = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  padding-top: 120px;
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 20px;

  .modal-button {
    @media ${device.mobileM} {
      position: absolute;
      top: -7%;
      left: 0;
    }

    @media ${device.mobileS} {
      top: -10%;
    }
  }
`;
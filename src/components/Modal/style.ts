import styled from "styled-components";

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
  grid-template-columns: 359px 1fr;
  position: relative;
  width: 1034px;
  height: 799px;
  background: #000;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  border-radius: 12px;
  padding: 20px;
  z-index: -1;
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
`;
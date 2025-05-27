import styled from "styled-components";

export const Box = styled.div`
  padding: 72px;
`;

export const Content = styled.div`
  padding-bottom: 63px;
`;

export const PreTitle = styled.h4`
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 65%;
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const Planet = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #8C8C8C;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #FFFFFF;
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 8px;
  color: #D3D3D3;
  margin-bottom: 12px;
`;

export const Residents = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #8C8C8C;
  display: flex;
  align-items: center;
  gap: 11px;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('/src/assets/img/residents-icon.svg') no-repeat center center;
    background-size: contain;
  }
`;

export const ImageBackground = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 359px;
  height: 100%; 
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: -1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    background:rgba(0, 0, 0, 0.5);
    pointer-events: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
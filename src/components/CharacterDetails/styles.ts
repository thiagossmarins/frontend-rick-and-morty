import styled from "styled-components";
import { device } from "../../styles/device";

export const Box = styled.div`
  padding: 72px;

  @media ${device.ipad} {
    margin-top: 75px;
    padding: 20px;
  }

  @media ${device.mobileM} {
    margin-top: 45px;
  }

  @media ${device.mobileS} {
    margin-top: 75px;
  }
`;

export const Content = styled.div`
  padding-bottom: 63px;
  
  @media ${device.mobileM} {
    padding-bottom: 41px;
  }
`;

export const PreTitle = styled.h4`
  font-weight: 400;
  font-size: var(--font-size-medium);
  line-height: 100%;
  letter-spacing: 10px;
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const Planet = styled.p`
  font-weight: 400;
  font-size: var(--font-size-planet);
  line-height: 100%;
  letter-spacing: 0%;
  color: #8C8C8C;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: clamp(var(--font-size-name), 5vw,var(--font-size-large));
  line-height: 120%;
  letter-spacing: 0%;
  color: #FFFFFF;
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: var(--font-size-subtitle);
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 8px;
  color: #D3D3D3;
  margin-bottom: 12px;
`;

export const Residents = styled.p`
  font-weight: 400;
  font-size: var(--font-size-planet);
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
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  @media ${device.ipad} {
    top: 0;
    width: 100%;
    height: 18%; 
    border-bottom-left-radius: 0px;
    border-top-right-radius: 12px;
  }

  @media ${device.mobileM} {
    height: 10%; 
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    background:rgba(0, 0, 0, 0.5);
    pointer-events: none;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    @media ${device.ipad} {
      border-bottom-left-radius: 0px;
      border-top-right-radius: 12px;
    }
  }
`;

export const Card = styled.div<{ modal?: boolean }>`
  width: ${({ modal }) => (modal ? '300px' : '200px')};
  height: ${({ modal }) => (modal ? '400px' : '250px')};
  position: relative;
  width: 223px;
  height: 223px;
  border: 2px solid #606060;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  transition: .3s ease-in-out;
  &:hover {
    border: 2px solid var(--color-secondary);
    box-shadow:
      0px 0px 5px 4px var(--color-secondary),
      0px 0px 0px 3px var(--color-secondary),
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;

`;

export const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px);
  padding: 10px;
  z-index: 1;
`;

export const Name = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
`;

export const Species = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: #fff;
`;
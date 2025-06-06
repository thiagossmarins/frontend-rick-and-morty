import styled from "styled-components";
import { device } from "../../styles/device";

interface CharactersStatus {
  status: string;
  modal?: boolean;
}

export const Container = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  padding-top: 120px;

  @media ${device.laptop} {
    max-width: 70%;
  }
  
  @media ${device.mobileM} {
    max-width: 100%;
  }
`;

export const Card = styled.div<{ modal?: boolean }>`
  width: ${({ modal }) => (modal ? '400px' : '218px')};
  height: ${({ modal }) => (modal ? '650px' : '218px')};
  
  @media ${device.mobileM} {
    width: 254px;
  }

    ${({ modal }) => modal ? `
    top: 50%;
    left: -10%;
    transform: translateY(-50%);
    position: absolute !important;

    @media ${device.laptop} {
      left: -5%;
      width: 350px;
      height: 500px;
    }

    @media ${device.ipad} {
      left: 50%;
      transform: translateX(-50%);
      top: -12%;
      width: 300px;
      height: 300px;
    }

    @media ${device.mobileM} {
      top: -7%;
      width: 220px;
      height: 220px;
    }

    @media ${device.mobileS} {
      top: -10%;
      width: 178px;
      height: 178px;
    }

    ` : `
    &:hover {
      border: none;
      box-shadow: none;
    }
  `}
  position: relative;
  border: 2px solid #606060;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  transition: .3s ease-in-out;
  ${({ modal }) => !modal && `
    &:hover {
      border: 2px solid var(--color-secondary);
      box-shadow:
        0px 0px 5px 4px var(--color-secondary),
        0px 0px 0px 3px var(--color-secondary);
      cursor: pointer;
    }
  `}
`;

export const Image = styled.img<CharactersStatus>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;

  filter: ${({ status, modal }) => modal ? 'none' : status === "Dead" ? "grayscale(1)" : "none"};
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

export const Name = styled.h2<{ modal?: boolean }>`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  
  ${({ modal }) => modal ? `
    white-space: normal;
    overflow: visible;
    max-width: 100%;
  ` : `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  `}
`;

export const Species = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: #fff;
`;


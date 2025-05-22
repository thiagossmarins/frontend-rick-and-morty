import styled from "styled-components";

interface CharactersStatus {
  status: string;
}

export const Container = styled.div`
  max-width: 65%;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  padding-top: 120px
`;

export const Card = styled.div`
  position: relative;
  
  width: 250px;
  height: 300px;
  
  border: 2px solid #606060;
  border-radius: 8px;
  
  overflow: hidden;
  z-index: 1;
  
  transition: .3s ease-in-out;

  &:hover {
    border: 2px solid #CBD736;

    box-shadow:
      0px 0px 5px 4px #C9D636,
      0px 0px 0px 3px #C9D636,
      0px 0px 0px 1px #00000099 inset;
  }
`;

export const Image = styled.img<CharactersStatus>`
  position: absolute;
  
  width: 100%;
  height: 100%;
  
  object-fit: cover;
  overflow: hidden;
  z-index: -1;

  filter: ${({ status }) => status === "Dead" ? "grayscale(1)" : "none"};
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
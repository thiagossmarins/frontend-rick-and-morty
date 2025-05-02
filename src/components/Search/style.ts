import styled from "styled-components";

export const SearchBtns = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin-top: 74px;

  & input{
    background-color: transparent;
    color: #9F9F9F;
    
    border: 2px solid #fff;
    border-radius: 8px;
    
    width: 200px;
    
    font-size: 16px;
    font-weight: 700;
    
    padding: 10px 0px 10px 10px;
    
    &:focus {
      color: #9F9F9F;
  
      border: 2px solid #fff;
      outline: none;
    }
  }

  & button {

    background-color: transparent;
    color: #fff;
    
    border: 2px solid #fff;
    border-radius: 8px;
    
    text-align: center;
    
    font-size: 16px;
    font-weight: 700;
    
    padding: 10px;
  }
`
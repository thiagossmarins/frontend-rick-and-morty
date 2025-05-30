import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 75px;
`

export const SearchInput = styled.input`
    background-color: transparent;
    color: #fff;
    
    border: 2px solid #fff;
    border-radius: 8px;
    
    width: 200px;
    
    font-size: var(--font-size-default);
    font-weight: 700;
    
    padding: 10px 0px 10px 10px;
    
    &:focus {
      color: #fff;
  
      border: 2px solid #fff;
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
`
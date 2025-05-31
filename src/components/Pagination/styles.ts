import styled from "styled-components";

interface NumberProps {
    active?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 2.5vw, 5rem);
  padding: 100px 0;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  font-size: var(--font-size-name);
  color: var(--color-text);
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Number = styled.button<NumberProps>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ active }) => active ? 'var(--color-secondary)' : 'var(--color-number)'};
  font-size: var(--font-size-name);
`;

export const PrevButton = styled.img`
  width: 10px;
  height: 20px;
  transform: rotate(180deg);
`;

export const NextButton = styled.img`
  width: 10px;
  height: 20px;
`;
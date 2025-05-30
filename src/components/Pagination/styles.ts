import styled from "styled-components";

interface NumberProps {
    active?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 100px 0;
`;

export const PageButton = styled.button`
  font-size: var(--font-size-name);
  color: var(--color-text);
  padding: 0.5rem 1rem;
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

export const Number = styled.p<NumberProps>`
  color: ${({ active }) => active ? 'var(--color-secondary)' : 'var(--color-number)'};
  font-size: var(--font-size-name);
`;
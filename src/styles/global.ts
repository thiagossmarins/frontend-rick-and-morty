import { createGlobalStyle } from 'styled-components';
import background from '../assets/img/background.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1E1E1E;
    --color-secondary: #CBD736;
    --color-background: #000000;
    --color-text: #fff;

    --font-size-small: 0.75rem;
    --font-size-default: 1.125rem;
    --font-size-name: 1.25rem;
    --font-size-specie: 0.75rem;
    --font-size-medium: 0.8rem;
    --font-size-large: 1.75rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-image: url(${background});
    background-color: var(--color-primary);
    background-size:  100% auto;
    background-repeat: no-repeat;
    background-position: top center;
  }
`;
import { createGlobalStyle } from 'styled-components';
import background from '../assets/img/background.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1E1E1E;
    --color-secondary: #CBD736;
    --color-background: #000000;
    --color-number: #909090;
    --color-text: #fff;

    --font-size-small: 0.75rem; // 12px
    --font-size-medium: 0.8rem; //13px
    --font-size-planet: 0.875rem; // 14px
    --font-size-default: 1rem; // 16px
    --font-size-subtitle: 1.125rem; // 18px
    --font-size-name: 1.25rem; // 20px
    --font-size-loading: 1.5rem; // 25px
    --font-size-large: 1.75rem; // 28px
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
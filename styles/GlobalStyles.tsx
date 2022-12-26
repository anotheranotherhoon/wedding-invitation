import { createGlobalStyle } from 'styled-components';
import { reset } from './css';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  }
  :root{
    --color-black : #0E0301;
    --color-white :#ffffff;
    --color-lightPink : #ffc2c3;
    --color-coral : #fe7773;
    --color-rose : #e91E25 

  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    color: var(--color-black);
    background-color:var(--color-white);
    font-family: 'Noto Serif KR', serif;
    font-size: 15px;
  }
  body {
  }
`;
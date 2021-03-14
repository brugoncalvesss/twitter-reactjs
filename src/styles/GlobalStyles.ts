import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #1DA1F2;
    --secondary: #14171A;
    --dark-gray: #657786;
    --light-gray: #AAB8C2;
    --extra-light-gray: #E1E8ED;
    --extra-extra-light-gray: #F5F8FA;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: var(--secondary);
    background: var(--white);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;

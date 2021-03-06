import { createGlobalStyle } from 'styled-components' ;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.bg};
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle ;

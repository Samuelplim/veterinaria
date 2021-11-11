import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
  }
  html, body,#root{
    height: 100vh;
  }

  :root{
    --primary: #2A2ABE;
    --secondary: #2B56C6;
    --tertiary: #0C9EF3;
    
    --white: #fff;
    --gray: #8a8c90;
    --text: #43545C;


    --background: #EDF1FA;
  }
`;

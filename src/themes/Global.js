import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  :root{
    --primary: #3277E0;
    --danger: #DF3030;
    --success: #3CA422;
    --warning: #FFA800;
  }

  * {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }


  body {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;

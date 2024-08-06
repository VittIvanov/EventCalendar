import { createGlobalStyle } from "styled-components"
import colors from "./consts/colors"

export const AppStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


  body{
      -webkit-font-smoothiing: antialiased;
      -moz-osx-font-smoothiing: grayscale;
      font-family: "Montserrat", sans-serif;
      background-color: ${colors.background_primary};
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      width: 1280px;
      max-height: 100vh;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background-size: cover;
      box-sizing: border-box;
      outline: 1px solid red;
      outline-offset: -1px;

      @media screen and (min-width: 1281px) {
        margin: 0 auto;
}
    }

  *,
  *:before,
  *:after{
    box-sizing: border-box;
  }

  a{
    color: inherit;
    text-decoration: inherit;
  }

  ul,li{
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }

  button{
    cursor: pointer;
    border: none;
    box-sizing: border-box;
  }

  tr,
  td,
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }

  h1, .h1{
    font-size: 26px;
  }

  h2, .h2{
    font-size: 22px;
  }

  h3, .h3{
    font-size: 18px;
  }

  h4, .h4{
    font-size: 16px;
  }

  p, li{
    font-size: 21px;
  }

.visually-hidden{
  position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
}
`

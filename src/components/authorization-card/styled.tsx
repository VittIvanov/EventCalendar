import styled from "styled-components";
import colors from "../../consts/colors";

export const AuthorizationCardWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 120px;

input { 
  caret-color: ${colors.caret_color};
}

  .authorization__title{
    font-size: 36px;
    margin-bottom: 24px;
    }

    .authorization__input-wrapper {
    position: relative;
    width: 346px;
    height: 60px;
    margin-bottom: 40px;
  }

  .authorization__input-label {
    position: absolute;
    top: 12px;
    left: 16px;
    font-size: 14px;
    color: ${colors.gray};
    pointer-events: none;
    transition: all 0.3s ease;
  }
    
  .authorization__input{
    margin-bottom: 40px;
    /* padding-top: 26px; */
    font-size: 16px;
    width: 346px;
    height: 60px;
    border: 1px solid ${colors.black};
    border-radius: 10px;
    outline: none;
    position: relative;
    }

    .authorization__input:focus + .authorization__input-label,
  .authorization__input:not(:placeholder-shown) + .authorization__input-label {
    top: -14px;
    font-size: 12px;
    color: ${colors.black};
    font-weight: 600;
  }

  .authorization__button{
    font-size: 18px;
    width: 346px;
    height: 60px;
    color: ${colors.white_font_color};
    background-color: ${colors.black};
    margin: auto;
  }
`
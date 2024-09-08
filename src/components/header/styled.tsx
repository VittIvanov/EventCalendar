import styled from "styled-components";
import colors from "../../consts/colors";
import { VisuallyHidden } from "../../wrappers/visually-hidden/VisuallyHidden";

export const HeaderWrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
margin: 0px;
padding: 0px;
height: 77px;
width: 1280px;
margin: 0 auto;
width: 100%;
/* @media screen and (min-width: 1280px) {

} */

.main-header_title-wrapper{
  display: flex;
  align-items: center;
}

.main-header_logo{
  width: 214px;
  height: 31px;
  margin: 23px 19px;
}

.main-header_title{
  width: 445px;
  height: 77px;
}


.header-button{
  width: 124px;
  height: 60px;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.white_font_color};
  background-color: ${colors.black};
  margin-top: auto;
}

/* стили для react-calendar_Navigation */
.react-calendar__navigation{
  min-width: 328px;
  height: 48px;
  margin: 0;
  margin-top: auto;
  display: flex;
  align-items: center;

  .react-calendar__navigation__label{
    font-size: 24px;
    color: ${colors.black};
    background-color: ${colors.background_primary};
    order: 0;
  }
  
  .react-calendar__navigation__arrow{
    width: 64px;
    height: 48px;
    background-color: ${colors.background_lightgray};
    /* background-image: url('${process.env.PUBLIC_URL}/assets/Arrow-left.png'); */
    font-size: 31px;
    border-radius: 8px;
    margin: 4px;
    order: 1;
  }
  
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    text-indent: -9999px;
    background-size: contain;
    background-repeat: no-repeat;
    width: 64px;
    height: 48px;
  }

  .react-calendar__navigation__prev-button{
    background-image: ${`url('${process.env.PUBLIC_URL}/assets/svg/Arrow-left.png')`};
  }

  .react-calendar__navigation__next-button{
    background-image: ${`url('${process.env.PUBLIC_URL}/assets/svg/Arrow-right.png')`};
  }


 .react-calendar__navigation__prev2-button,
 .react-calendar__navigation__next2-button{
    ${VisuallyHidden}
  }
}

`

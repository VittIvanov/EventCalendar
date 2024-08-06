import styled from "styled-components";
import colors from "../../consts/colors";

export const HeaderWrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
margin: 0px;
padding: 0px;
height: 77px;
width: 1290px;

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
`

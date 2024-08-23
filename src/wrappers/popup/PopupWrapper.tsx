import styled from "styled-components";
import colors from "../../consts/colors";

export const PopupWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
padding: 120px;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
background-color: ${colors.background_primary};
box-sizing: border-box;
outline: 1.5px solid ${colors.gray};
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
border-radius: 64px;
z-index: 1000;
`
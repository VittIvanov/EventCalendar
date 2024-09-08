import styled from "styled-components";

export const BackDrop = styled.div`
position: absolute;
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25); /* Полупрозрачный черный для затемнения */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; /* Поверх всего контента */
`
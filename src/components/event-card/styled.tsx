import styled from "styled-components";
import colors from "../../consts/colors";

export const EventCardWrapper = styled.div`
  /* position: relative; */
  min-width: 14.2%;
  min-height: 16.6%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 5px;
  background-color: ${colors.background_primary};
  outline: 1.5px solid ${colors.gray};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:nth-child(1) {
    border-top-left-radius: 20px;
  }

  &:nth-child(7) {
    border-top-right-radius: 20px;
  }

  &:nth-child(36) {
    border-bottom-left-radius: 20px;
  }

  &:nth-child(42) {
    border-bottom-right-radius: 20px;
  }

  .event-card__text{ 
  color: ${colors.gray};
  cursor: pointer;
}
`

export const DateLabel = styled.div<{ isCurrentMonth: boolean }>`
  font-size: 20px;
  /* position: absolute;
  right: 10px;
  top: 10px; */

  color: ${({ isCurrentMonth }) => (isCurrentMonth ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)')};
  font-weight: ${({ isCurrentMonth }) => (isCurrentMonth ? 'normal' : 'lighter')};
`



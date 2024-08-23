import styled from "styled-components";
import colors from "../../consts/colors";

export const CalendarDatesContainer = styled.div`
  margin-top: 80px;

  .calendar-dates__weekdays{
    display: flex;
    justify-content: space-between;
  }

  .calendar-dates__weekdays-item{
    width: 14.2%;
    text-align: end;
    font-size: 24px;
    font-weight: 600;
  }
`

export const CalendarDatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0px;
  max-width: 100vw;
  min-height: 73.1vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: 1px solid ${colors.gray};
  overflow: hidden;
  `
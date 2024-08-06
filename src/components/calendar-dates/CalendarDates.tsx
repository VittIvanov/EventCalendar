import React from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { CalendarDatesWrapper } from "./styled";

interface CalendarDatesProps {
  date: Value;
  onChange: (value: Value) => void;
}

const CalendarDates: React.FC<CalendarDatesProps> = ({ date, onChange }) => {
  return (
    <Calendar
      onChange={onChange}
      value={date}
      selectRange={true}
      showNavigation={false}
      className="react-calendar__dates"
    />
  );
};

export default CalendarDates;
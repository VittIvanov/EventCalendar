import React, { useState, useEffect } from "react";
import EventCard from "../event-card/EventCard";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { CalendarDatesContainer, CalendarDatesWrapper } from "./styled";

interface CalendarDatesProps {
  date: Value;
  onChange: (value: Value) => void;
  onEventClick: () => void;
}

const getDaysInMonth = (date: Date) => {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push({ date: new Date(date.getFullYear(), date.getMonth(), i), isCurrentMonth: true });
  }
  return daysArray;
};

const getPreviousMonthDays = (date: Date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; // 0 (Monday) - 6 (Sunday)
  const previousMonthDays = [];
  if (startDay > 0) {
    const prevMonthDate = new Date(date.getFullYear(), date.getMonth(), 0);
    for (let i = startDay - 1; i >= 0; i--) {
      previousMonthDays.push({ date: new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), prevMonthDate.getDate() - i), isCurrentMonth: false });
    }
  }
  return previousMonthDays;
};

const getNextMonthDays = (date: Date, daysDisplayed: number) => {
  const nextMonthDays = [];
  const totalCells = 42; // 6 rows * 7 columns
  if (daysDisplayed < totalCells) {
    const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    for (let i = 0; i < totalCells - daysDisplayed; i++) {
      nextMonthDays.push({ date: new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), nextMonthDate.getDate() + i), isCurrentMonth: false });
    }
  }
  return nextMonthDays;
};

const CalendarDates: React.FC<CalendarDatesProps> = ({ date, onChange, onEventClick }) => {
  const [days, setDays] = useState<{ date: Date, isCurrentMonth: boolean }[]>([]);

  useEffect(() => {
    if (date instanceof Date) {
      const currentMonthDays = getDaysInMonth(date);
      const previousMonthDays = getPreviousMonthDays(date);
      const nextMonthDays = getNextMonthDays(date, currentMonthDays.length + previousMonthDays.length);
      setDays([...previousMonthDays, ...currentMonthDays, ...nextMonthDays]);
    }
  }, [date]);

  const handleAddEvent = (date: Date) => {
    // Add event logic here
    console.log(`Add event for date: ${date}`);
  };

  return (
    <CalendarDatesContainer>

      <ul className="calendar-dates__weekdays">
        <li className="calendar-dates__weekdays-item">Пн</li>
        <li className="calendar-dates__weekdays-item">Вт</li>
        <li className="calendar-dates__weekdays-item">Ср</li>
        <li className="calendar-dates__weekdays-item">Чт</li>
        <li className="calendar-dates__weekdays-item">Пт</li>
        <li className="calendar-dates__weekdays-item">Сб</li>
        <li className="calendar-dates__weekdays-item">Вс</li>
      </ul>

      <CalendarDatesWrapper>

        {days.map((dayData, index) => (
          <EventCard
            key={index}
            date={dayData.date}
            isCurrentMonth={dayData.isCurrentMonth}
            onAddEvent={onEventClick}
          />
        ))}
      </CalendarDatesWrapper>
    </CalendarDatesContainer>
  );
};

export default CalendarDates;

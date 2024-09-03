import React, { useState, useEffect } from "react";
import EventCard from "../event-card/EventCard";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { CalendarDatesContainer, CalendarDatesWrapper } from "./styled";
import { mockEvents as events } from "../../mocks/mockEvents";
import { MyEvent } from "../../types/types";
import { formatDate } from "../../helpers/formatDate";

interface CalendarDatesProps {
  date: Value;
  onChange: (value: Value) => void;
  onEventClick: (event: MyEvent | null) => void;
}

const getDaysInMonth = (date: Date) => {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const daysArray = [];

  // Начинаем с первого числа месяца
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);

  for (let i = 0; i < daysInMonth; i++) {
    const dayDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
    daysArray.push({ date: dayDate, isCurrentMonth: true });
  }
  return daysArray;
};

const getPreviousMonthDays = (date: Date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; // 0 (Monday) - 6 (Sunday)
  const previousMonthDays = [];

  if (startDay > 0) {
    const prevMonthDate = new Date(date.getFullYear(), date.getMonth(), 0); // Get last day of previous month

    for (let i = startDay - 1; i >= 0; i--) {
      const prevDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), prevMonthDate.getDate() - i);
      previousMonthDays.push({ date: prevDate, isCurrentMonth: false });
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
      const nextDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i + 1);
      nextMonthDays.push({ date: nextDate, isCurrentMonth: false });
    }
  }
  return nextMonthDays;
};



const CalendarDates: React.FC<CalendarDatesProps> = ({ date, onEventClick }) => {
  const [days, setDays] = useState<{ date: Date, isCurrentMonth: boolean }[]>([]);
  const [eventsByDate, setEventsByDate] = useState<{ [key: string]: MyEvent[] }>({});

  useEffect(() => {
    if (date instanceof Date) {
      const currentMonthDays = getDaysInMonth(date);
      const previousMonthDays = getPreviousMonthDays(date);
      const nextMonthDays = getNextMonthDays(date, currentMonthDays.length + previousMonthDays.length);

      setDays([...previousMonthDays, ...currentMonthDays, ...nextMonthDays]);

      // Map events by date
      const eventsMap: { [key: string]: MyEvent[] } = {};
      events.forEach(event => {
        const eventKey = formatDate(new Date(event.date));
        if (!eventsMap[eventKey]) {
          eventsMap[eventKey] = [];
        }
        eventsMap[eventKey].push(event);
      });
      console.log("Events Map:", eventsMap);
      setEventsByDate(eventsMap);
    }
  }, [date]);

  const handleEventClick = (eventDate: Date) => {
    const eventKey = formatDate(eventDate);
    const event = eventsByDate[eventKey]?.[0] || null;
    onEventClick(event); // Передаем найденное событие

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
        {days.map((dayData, index) => {
          const eventKey = formatDate(dayData.date);
          return (
            <EventCard
              key={index}
              date={dayData.date}
              isCurrentMonth={dayData.isCurrentMonth}
              events={eventsByDate[eventKey] || []}
              onAddEvent={() => handleEventClick(dayData.date)}
            />
          );
        })}
      </CalendarDatesWrapper>
    </CalendarDatesContainer>
  );
};

export default CalendarDates;

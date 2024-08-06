import React, { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MainPageWrapper } from "./styled";
import Header from "../../components/header/Header";
import CalendarDates from "../../components/calendar-dates/CalendarDates";

const MainPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  return (
    <MainPageWrapper>
      <Header date={date as Date} setDate={setDate} />
      <CalendarDates date={date} onChange={handleDateChange} />
    </MainPageWrapper>
  );
};

export default MainPage;
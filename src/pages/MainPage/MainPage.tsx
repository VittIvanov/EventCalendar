import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MainPageWrapper } from "./styled";
import Header from "../../components/header/Header";
import CalendarDates from "../../components/calendar-dates/CalendarDates";
import Modal from "../../components/modal/Modal";

const MainPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [isAuthVisible, setIsAuthVisible] = useState<boolean>(false);

  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  const showAuthCard = () => {
    setIsAuthVisible(true);
  };

  const closeAuthCard = () => {
    setIsAuthVisible(false);
  };

  return (
    <MainPageWrapper>
      <Header onLoginClick={showAuthCard} date={date as Date} setDate={setDate} />
      <CalendarDates date={date} onChange={handleDateChange} />

      {isAuthVisible && <Modal onClose={closeAuthCard} />}
    </MainPageWrapper>
  );
};

export default MainPage;
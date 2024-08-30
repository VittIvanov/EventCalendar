import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MainPageWrapper } from "./styled";
import Header from "../../components/header/Header";
import CalendarDates from "../../components/calendar-dates/CalendarDates";
import Modal from "../../components/modal/Modal";
import AuthorizationCard from "../../components/authorization-card/index";
import EventReview from "../../components/event-review/index";

const MainPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<"auth" | "eventReview" | null>(null);


  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  const showAuthCard = () => {
    setModalContent("auth");
    setIsModalVisible(true);
  };

  const showEventReview = () => {
    setModalContent("eventReview");
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  return (
    <MainPageWrapper>
      <Header onLoginClick={showAuthCard} date={date as Date} setDate={setDate} />
      <CalendarDates date={date} onChange={handleDateChange} onEventClick={showEventReview} />

      {isModalVisible && (
        <Modal
          onClose={closeModal}
          title={modalContent === "auth" ? "Авторизация" : "Просмотр события"}>
          {modalContent === "auth" && <AuthorizationCard />}
          {modalContent === "eventReview" && <EventReview
            title="Пример события"
            description="Описание события"
            date="2024-09-01"
            location="Москва"
            participants={["Участник 1", "Участник 2"]}
            gallery={["image1.jpg", "image2.jpg"]}
            isCompleted={false}
          />}
        </Modal>
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
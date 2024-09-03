import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MainPageWrapper } from "./styled";
import Header from "../../components/header/Header";
import CalendarDates from "../../components/calendar-dates/CalendarDates";
import Modal from "../../components/modal/Modal";
import AuthorizationCard from "../../components/authorization-card/index";
import EventReview from "../../components/event-review/index";
import { MyEvent } from "../../types/types";


const MainPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<"auth" | "eventReview" | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);


  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  const showAuthCard = () => {
    setModalContent("auth");
    setIsModalVisible(true);
  };

  const showEventReview = (event: MyEvent | null) => {
    setSelectedEvent(event);
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
          {modalContent === "eventReview" && selectedEvent ?
            (<EventReview
              title={selectedEvent.title}
              description={selectedEvent.description || ""}
              date={selectedEvent.date}
              location={selectedEvent.location || ""}
              participants={selectedEvent.participants || []}
              gallery={selectedEvent.gallery || []}
              isCompleted={selectedEvent.isCompleted || false}
            />) : (<p>нет информации о событии</p>)
          }
        </Modal>
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
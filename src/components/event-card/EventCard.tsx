import React from 'react';
import { EventCardWrapper, DateLabel } from './styled';


interface EventCardProps {
  date: Date;
  onAddEvent: () => void;
  isCurrentMonth: boolean;
}


const EventCard: React.FC<EventCardProps> = ({ date, onAddEvent, isCurrentMonth }) => {
  const isFirstDayOfMonth = date.getDate() === 1;
  const monthName = date.toLocaleString('default', { month: 'short' });

  return (
    <EventCardWrapper onClick={onAddEvent}>
      <DateLabel isCurrentMonth={isCurrentMonth}>
        <span>{date.getDate()}</span>
        {isFirstDayOfMonth && <span>{monthName}</span>}
      </DateLabel>

      <p className='event-card__text'>Нажмите для просмотра события</p>
    </EventCardWrapper>
  );
};

export default EventCard;
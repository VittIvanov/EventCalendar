import React from 'react';
import { EventCardWrapper, DateLabel } from './styled';


interface EventCardProps {
  date: Date;
  onAddEvent: (date: Date) => void;
  isCurrentMonth: boolean;
}


const EventCard: React.FC<EventCardProps> = ({ date, isCurrentMonth }) => {
  const isFirstDayOfMonth = date.getDate() === 1;
  const monthName = date.toLocaleString('default', { month: 'short' });

  return (
    <EventCardWrapper>
      <DateLabel isCurrentMonth={isCurrentMonth}>
        <span>{date.getDate()}</span>
        {isFirstDayOfMonth && <span>{monthName}</span>}
      </DateLabel>

      <p className='event-card__text'>здесь будут события</p>
    </EventCardWrapper>
  );
};

export default EventCard;
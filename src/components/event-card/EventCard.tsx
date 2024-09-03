import React from 'react';
import { EventCardWrapper, DateLabel } from './styled';
import { MyEvent } from '../../types/types';
import { formatDate } from '../../helpers/formatDate';


interface EventCardProps {
  date: Date;
  onAddEvent: () => void;
  isCurrentMonth: boolean;
  events: MyEvent[];
}


const EventCard: React.FC<EventCardProps> = ({ date, onAddEvent, isCurrentMonth, events }) => {
  const isFirstDayOfMonth = date.getDate() === 1;
  const monthName = date.toLocaleString('default', { month: 'short' });

  const dateString = formatDate(date);

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const eventDateString = formatDate(eventDate);
    console.log("Event Date:", eventDateString);
    console.log("Date String:", dateString);
    console.log("date.getDate()", date.getDate());

    return eventDateString === dateString;
  });


  return (
    <EventCardWrapper onClick={onAddEvent}>
      <DateLabel isCurrentMonth={isCurrentMonth}>
        <span>{date.getDate()}</span>
        <br />
        <span>{dateString}</span>
        {isFirstDayOfMonth && <span>{monthName}</span>}
      </DateLabel>

      {/* Display all events for the specific date sorted by time */}
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <p key={index} className='event-card__text'>
            {event.title}
          </p>
        ))
      ) : (
        <p className='event-card__text'></p>
      )}

    </EventCardWrapper>
  );
};

export default EventCard;
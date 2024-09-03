import { EventReviewWrapper } from './styled'

interface EventReviewProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string[];
  gallery: string[];
  isCompleted: boolean;
}

const EventReview: React.FC<EventReviewProps> = ({
  title,
  description,
  date,
  location,
  participants,
  gallery,
  isCompleted,
}) => {

  const renderCompleted = isCompleted;
  const renderNotCompleted = !isCompleted;

  return (
    <EventReviewWrapper>
      <h2 className="event-review__title">{title}</h2>
      {renderCompleted && (
        <div>
          <img src="*" alt="иконка завершенного события" />
          <span>Мероприятие уже прошло</span>
        </div>
      )}
      <p className="event-review__text">{description}</p>

      <div className="event-review__info">
        <time className="event-review__date" dateTime={date}>{date}</time>
        <address className="event-review__location">{location}</address>
      </div>


      <section className="event-review__participants">
        <h2>Участники</h2>
        <ul className="event-review__participants-list">
          {participants.map((participant, index) => (
            <li key={index} className="event-review__participants-item">{participant}</li>
          ))}
        </ul>
      </section>

      <section className="event-review__gallery">
        <h2>Галерея</h2>
        <ul className="event-review__gallery-list">
          {gallery.map((image, index) => (
            <li key={index} className="event-review__gallery-item">
              <img src={image} alt={`Галерея ${index + 1}`} />
            </li>
          ))}
        </ul>
      </section>
      {renderNotCompleted && (
        <a href="#" className="event-review__auth-link">Войдите, чтобы присоединиться к событию</a>
      )}

    </EventReviewWrapper>
  )
}
export default EventReview;
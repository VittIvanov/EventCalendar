
import { EventReviewWrapper } from './styled'
import { mockParticipants } from '../../mocks/mockParticipants';

interface Participant {
  id: number;
  participant_name: string;
  avatar: string;
}

interface EventReviewProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string[];
  gallery: string[];
  organizer: string;
  isCompleted: boolean;
}

const EventReview: React.FC<EventReviewProps> = ({
  title,
  description,
  date,
  location,
  participants,
  gallery,
  organizer,
  isCompleted,
}) => {
  const renderCompleted = isCompleted;
  const renderNotCompleted = !isCompleted;

  const findParticipantData = (name: string): Participant | undefined => {
    return mockParticipants.find((participant) => participant.participant_name === name);
  };

  const organizerData = findParticipantData(organizer || '');
  console.log("организатор", organizerData);
  if (!title || !date) {
    return <p>Нет информации о событии</p>;
  }

  return (
    <EventReviewWrapper>
      <h2 className="event-review__title">{title}</h2>
      {renderCompleted && (
        <div className='event-review__completed'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/svg/event-completed.svg`}
            alt="иконка завершенного события" />
          <span>Мероприятие уже прошло</span>
        </div>
      )}

      <section className="event-review__info">

        <div className="event-review__info-sidebar">

          <b className="event-review__week-day" aria-label="день недели">день недели</b>
          <br />
          <b className="event-review__date" aria-label="дата мероприятия">{date}</b>
          <br />
          <time className="event-review__time" aria-label="время проведения мероприятия">прим.: 12:00</time>
          <br />
          <address aria-label="место проведения мероприятия" className="event-review__location">{location}</address>

        </div>

        <p className="event-review__text">{description}</p>

      </section>
      <div className="event-review__participants-gallery">

        <section className="event-review__participants">

          <h2>Участники</h2>
          <ul className="event-review__participants-list">

            {organizerData && (
              <li key={organizerData.id} className="event-review__participants-item">
                <img src={organizerData.avatar} alt={organizerData.participant_name} />
                <div className="event-review__participants-organizer">
                  <p>{organizerData.participant_name}</p>
                  <span >Организатор</span>
                </div>
              </li>
            )}

            {participants.map((participant_name) => {
              const participant = findParticipantData(participant_name);
              return participant ? (
                <li key={participant.id} className="event-review__participants-item">
                  <img src={participant.avatar} alt={participant.participant_name} />
                  <p>{participant.participant_name}</p>
                </li>
              ) : (
                <li key={participant_name}>Участник {participant_name} не найден</li>
              );
            })}
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

      </div>

      {renderNotCompleted && (
        <a href="#" className="event-review__auth-link">Войдите, чтобы присоединиться к событию</a>
      )}

    </EventReviewWrapper>
  )
}
export default EventReview;
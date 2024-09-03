import { mockParticipants } from "./mockParticipants";
import { MyEvent } from "../types/types";

export const mockEvents: MyEvent[] = [
  {
    title: "Фестиваль «Будущее»",
    description: "Это независимый музыкальный фестиваль талантливых артистов, которые уже собирают крупнейшие залы поклонников по всей России или только начинают свой творческий путь. Главное, что объединяет участников фестиваля — эмоции, которые они передают слушателям, погружая их в особенную атмосферу своего выступления.",
    date: "2024-08-30",
    location: "г. Москва, Ленинградский проспект, 80",
    time: "12:00",
    organizer: "Илья",
    participants: mockParticipants
      .filter(participant => ["Антон", "Екатерина", "Денис", "Элика"].includes(participant.name)).map(participant => participant.name),
    more: "+200",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/img/gallery/future 1.png`,
      `${process.env.PUBLIC_URL}/assets/img/gallery/future 2.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/future 3.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/future 4.png`
    ],
    isCompleted: new Date("2024-08-30") < new Date(),
  },
  {
    title: "Конференция фронтенд-разработки",
    description: "Профессиональная конференция фронтенд-разработчиков. Разберем профессиональные вопросы, расширим кругозор, вдохновимся на изучение новинок и много нетворкинга.",
    date: "2024-09-30",
    location: "г. Москва, ул. Переяславская, д. 13 ",
    time: "12:00",
    organizer: "Антон",
    participants: ["Эмилия", "Никита", "Роман", "Оля"],
    // participants: mockParticipants.map((participant) => participant.name), надо добавить именно тех, кто участвует в фестивале
    gallery: [
      `${process.env.PUBLIC_URL}/assets/img/gallery/frontend 1.png`,
      `${process.env.PUBLIC_URL}/assets/img/gallery/frontend 2.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/frontend 3.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/frontend 4.png`
    ],
    isCompleted: new Date("2024-09-30") < new Date(),
  },
  {
    title: "Велофестиваль La Strada",
    description: "Профессиональная конференция фронтенд-разработчиков. Разберем профессиональные вопросы, расширим кругозор, вдохновимся на изучение новинок и много нетворкинга.",
    date: "2024-09-05",
    location: "г. Санкт-Петербург, ЦПКиО им. Кирова",
    time: "11:00",
    organizer: "Роман",
    participants: ["Егор", "Анна", "Рита", "Феликс"],
    // participants: mockParticipants.map((participant) => participant.name), надо добавить именно тех, кто участвует в фестивале
    more: "+480",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 1.png`,
      `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 2.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 3.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 4.png`
    ],
    isCompleted: new Date("2024-09-05") < new Date(),
  },
  {
    title: "День Знаний",
    description: "Профессиональная конференция фронтенд-разработчиков. Разберем профессиональные вопросы, расширим кругозор, вдохновимся на изучение новинок и много нетворкинга.",
    date: "2024-09-01",
    location: "г. Санкт-Петербург, ЦПКиО им. Кирова",
    time: "11:00",
    organizer: "Роман",
    participants: ["Егор", "Анна", "Рита", "Феликс"],
    // participants: mockParticipants.map((participant) => participant.name), надо добавить именно тех, кто участвует в фестивале
    more: "+480",
    gallery: [
      `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 1.png`,
      `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 2.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 3.png`, `${process.env.PUBLIC_URL}/assets/img/gallery/la strada 4.png`
    ],
    isCompleted: new Date("2024-09-01") < new Date(),
  },
];
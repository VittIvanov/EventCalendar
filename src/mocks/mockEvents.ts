

export const mockEvents: ({
  title: string;
  description: string;
  date: string;
  location: string;
  time: string;
  organizer: string;
  participants: string[];
  more?: string;
  gallery: string[];
  isCompleted: boolean;
})[] = [
    {
      title: "Фестиваль «Будущее»",
      description: "Это независимый музыкальный фестиваль талантливых артистов, которые уже собирают крупнейшие залы поклонников по всей России или только начинают свой творческий путь. Главное, что объединяет участников фестиваля — эмоции, которые они передают слушателям, погружая их в особенную атмосферу своего выступления.",
      date: "2024-09-21",
      location: "г. Москва, Ленинградский проспект, 80",
      time: "12:00",
      organizer: "Илья",
      participants: ["Антон", "Екатерина", "Денис", "Элика"],
      more: "+200",
      gallery: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      isCompleted: new Date("2024-09-21") < new Date(), // Check if the event is completed
    },
    {
      title: "Конференция фронтенд-разработки",
      description: "Профессиональная конференция фронтенд-разработчиков. Разберем профессиональные вопросы, расширим кругозор, вдохновимся на изучение новинок и много нетворкинга.",
      date: "2024-09-30",
      location: "г. Москва, ул. Переяславская, д. 13 ",
      time: "12:00",
      organizer: "Антон",
      participants: ["Эмилия", "Никита", "Роман", "Оля"],
      gallery: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      isCompleted: new Date("2024-09-15") < new Date(), // Check if the event is completed
    },
    {
      title: "Велофестиваль La Strada",
      description: "Профессиональная конференция фронтенд-разработчиков. Разберем профессиональные вопросы, расширим кругозор, вдохновимся на изучение новинок и много нетворкинга.",
      date: "2024-08-25",
      location: "г. Санкт-Петербург, ЦПКиО им. Кирова",
      time: "11:00",
      organizer: "Роман",
      participants: ["Егор", "Анна", "Рита", "Феликс"],
      more: "+480",
      gallery: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      isCompleted: new Date("2024-09-15") < new Date(), // Check if the event is completed
    },
  ];
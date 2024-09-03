export interface MyEvent {
  title: string;
  description?: string;
  date: string;
  location?: string;
  time?: string;
  organizer?: string;
  participants?: string[];
  more?: string;
  gallery?: string[];
  isCompleted?: boolean;
};

import { Ticket } from './ticket.interface';

export interface Event {
  eventTitle: string;
  eventDate: Date;
  eventCity: string;
  tickets: Ticket[];
}
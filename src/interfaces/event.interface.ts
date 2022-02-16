import { Ticket } from './ticket.interface';

export interface Event {
  eventTitle: string;
  eventDate: number;
  eventCity: string;
  tickets: Ticket[];
}
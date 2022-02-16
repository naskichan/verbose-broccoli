import { Injectable } from '@nestjs/common';
import { Event } from './interfaces/event.interface'
import { EventDto } from './interfaces/event.dto'
import { db } from './data.mock'

@Injectable()
export class AppService {
  events = db;
  getEvents(): Event[] {
    console.log(this.events)
    return this.events;
  }
  addEvent(newEvent: EventDto): Event {
    let obj: Event = {eventTitle: newEvent.eventTitle, eventCity: newEvent.eventCity, eventDate: newEvent.eventDate, tickets: []}
    this.events.push(obj)
    return obj;
  }
}

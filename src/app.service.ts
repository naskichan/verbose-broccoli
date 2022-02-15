import { Injectable } from '@nestjs/common';
import { Event } from './interfaces/event.interface'

let events: Event[];
@Injectable()
export class AppService {
  getEvents(): Event[] {
    return events;
  }
}

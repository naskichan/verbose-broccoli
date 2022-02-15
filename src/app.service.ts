import { Injectable } from '@nestjs/common';
import { Event } from './interfaces/event.interface'

let events: Events[];
@Injectable()
export class AppService {
  getEvents(): string {
    return events;
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { Event } from './interfaces/event.interface'
import { EventDto } from './interfaces/event.dto'
import { TicketDto } from './interfaces/ticket.dto'
import { Ticket } from './interfaces/ticket.interface'
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
  addTicket(newTicket: TicketDto): Ticket {
    let barcode = makeid(8)
    let obj: Ticket = {firstName: newTicket.firstName, lastName: newTicket.lastName, barcode: barcode}
    this.events[newTicket.eventId].tickets.push(obj)
    return obj;
  }
}

// helpers

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
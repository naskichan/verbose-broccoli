import { Controller, Get, Post, Body, BadRequestException} from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './interfaces/event.interface'
import { EventDto } from './interfaces/event.dto'
import { TicketDto } from './interfaces/ticket.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/events')
  getEvents(): Event[] {
    return this.appService.getEvents();
  }
  @Post('/events')
  addEvent(@Body() message: EventDto) {
    if(message.eventDate < Date.now()) {
      throw new BadRequestException("Events cannot be in the past")
    } else if(message.eventCity.length < 6 || message.eventTitle.length < 6) {
      throw new BadRequestException("Event names and Cities must have at least 6 characters")
    }
    return this.appService.addEvent(message)
  }
  @Post('/ticket')
  bookTicket(@Body() message: TicketDto) {
    return this.appService.addTicket(message)
  }
}

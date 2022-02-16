import { Controller, Get, Post, Body, BadRequestException} from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './interfaces/event.interface'
import { EventDto } from './interfaces/event.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/events')
  getEvents(): Event[] {
    return this.appService.getEvents();
  }
  @Post('/events')
  addEvent(@Body() message: EventDto) {
    if(message.eventDate < 1600000000 || message.eventCity.length <= 6) {
      throw new BadRequestException("Bad request")
    }
    return this.appService.addEvent(message)
  }
}

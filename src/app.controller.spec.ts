import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventDto } from './interfaces/event.dto'

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getEvents', () => {
    it('should return 1 event', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getEvents()).toHaveLength(1);
    });
  });

  describe('addEvents', () => {
    it('should accept an eventdto', () => {
      const appController = app.get<AppController>(AppController);
      const event: EventDto = {eventTitle: "Hello World", eventDate: Date.now(), eventCity: "Mock World"}
      appController.addEvent(event)

      expect(appController.getEvents()).toHaveLength(2);
    });
    it('should not create an event on invalid input', () => {
      const appController = app.get<AppController>(AppController);
      const event: EventDto = {eventTitle: "Hello World", eventDate: 0, eventCity: "Mock World"}
      expect(appController.addEvent(event)).toThrow(BadRequestException);
    });
  });
});

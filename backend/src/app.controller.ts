import { Body, Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api')
export class AppController {
  @Get()
  sayHello(): string {
    return 'elocome to Api Food Social qqq';
  }
}

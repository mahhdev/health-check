import { Controller, Get } from '@nestjs/common';
import { Test2Service } from './test-2.service';

@Controller()
export class Test2Controller {
  constructor(private readonly test2Service: Test2Service) {}

  @Get()
  getHello(): string {
    return this.test2Service.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { Test1Service } from './test-1.service';

@Controller()
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) {}

  @Get()
  getHello(): string {
    return this.test1Service.getHello();
  }
}

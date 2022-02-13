import { Controller, Get } from '@nestjs/common';
import { Test3Service } from './test-3.service';

@Controller()
export class Test3Controller {
  constructor(private readonly test3Service: Test3Service) {}

  @Get()
  getHello(): string {
    return this.test3Service.getHello();
  }
}

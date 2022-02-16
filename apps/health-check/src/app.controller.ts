import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('consult/:servico')
  async getLogs(@Param() params): Promise<any> {
    return this.appService.allLogs(params.servico);
  }

}

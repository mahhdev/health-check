import { Controller, Get, Param } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {

  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
  ) { }

  @Get(':API')
  @HealthCheck()
  check(@Param() params) {

    if(params.API == 'health-check') {
      return this.health.check([
        () => this.http.pingCheck('API health-check', `localhost:${process.env.PORTA_HEALTH_CHECK}`),
        () => this.db.pingCheck('Mongo'),
      ]);
    }

    if(params.API == 'test1') {
      return this.health.check([
        () => this.http.pingCheck('API test1', `localhost:${process.env.PORTA_TEST1}`),
        () => this.db.pingCheck('Mongo'),
      ]);
    }

    if(params.API == 'test2') {
      return this.health.check([
        () => this.http.pingCheck('API test2', `localhost:${process.env.PORTA_TEST2}`),
        () => this.db.pingCheck('Mongo'),
      ]);
    }

    if(params.API == 'test3') {
      return this.health.check([
        () => this.http.pingCheck('API test3', `localhost:${process.env.PORTA_TEST3}`),
        () => this.db.pingCheck('Mongo'),
      ]);
    }

  }
 
}

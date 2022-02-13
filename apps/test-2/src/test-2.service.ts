import { Injectable } from '@nestjs/common';

@Injectable()
export class Test2Service {
  getHello(): string {
    return 'Hello World!';
  }
}

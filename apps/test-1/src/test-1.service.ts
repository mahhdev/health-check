import { Injectable } from '@nestjs/common';

@Injectable()
export class Test1Service {
  getHello(): string {
    return 'Hello World!';
  }
}

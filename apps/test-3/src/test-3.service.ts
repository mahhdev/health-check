import { Injectable } from '@nestjs/common';

@Injectable()
export class Test3Service {
  getHello(): string {
    return 'Hello World!';
  }
}

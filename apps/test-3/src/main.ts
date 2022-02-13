import { NestFactory } from '@nestjs/core';
import { Test3Module } from './test-3.module';

async function bootstrap() {
  const app = await NestFactory.create(Test3Module);
  await app.listen(process.env.PORTA_TEST3);
  console.log(`API test3 on Port ${process.env.PORTA_TEST3}`)

}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { Test2Module } from './test-2.module';

async function bootstrap() {
  const app = await NestFactory.create(Test2Module);
  await app.listen(process.env.PORTA_TEST2);
  console.log(`API test2 on Port ${process.env.PORTA_TEST2}`)

}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { Test1Module } from './test-1.module';

async function bootstrap() {
  const app = await NestFactory.create(Test1Module);
  await app.listen(process.env.PORTA_TEST1);
  console.log(`API test1 on Port ${process.env.PORTA_TEST1}`)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORTA_HEALTH_CHECK);
  console.log(`API health-check on Port ${process.env.PORTA_HEALTH_CHECK}`)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe);
  app.use(cookieParser())
  await app.listen(8000);

  
  const ip = (await app.getUrl()).includes('[::1]') ? `http://localhost:8000` : `${await app.getUrl()}`;
  console.log(`Application is running on: ${ip}/api`)
}
bootstrap();

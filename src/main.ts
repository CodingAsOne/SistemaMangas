import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(8000);
  let ip = '';
  (await app.getUrl()).includes('[::1]') ? ip = `http://localhost:8000` : ip = `${await app.getUrl()}`;
  console.log(`Application is running on: ${ip}/api`)
}
bootstrap();

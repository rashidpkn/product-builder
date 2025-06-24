import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './services/database';

async function bootstrap() {
  // connectToDatabase(
  //   'xxxx',
  // );
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(4001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './services/database';

async function bootstrap() {
  connectToDatabase(
    'mongodb+srv://root:Abc12345@dev.wre79y3.mongodb.net/my-thread-com?retryWrites=true&w=majority&appName=dev',
  );
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(4001);
}
bootstrap();

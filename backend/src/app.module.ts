import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    OrderModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..','frontend','build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

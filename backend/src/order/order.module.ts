import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { NomodPaymentServices } from 'src/order/nomodPayment.services';

@Module({
  controllers: [OrderController],
  providers: [OrderService, NomodPaymentServices],
})
export class OrderModule {}

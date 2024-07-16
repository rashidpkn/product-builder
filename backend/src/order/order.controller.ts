import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { customerType, fabricType } from './types';
import { orderPlaced } from 'src/util/mail/order/orderPlaced';

@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() body: { customer: customerType; fabric: fabricType }) {
    try {

      const {customer,fabric} = body
      orderPlaced(customer,fabric)
      return {message:"Order placed"}

    } catch (error) {}
  }
}

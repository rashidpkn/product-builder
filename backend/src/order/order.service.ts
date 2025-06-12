import { Injectable } from '@nestjs/common';
import { NomodPaymentServices } from 'src/order/nomodPayment.services';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly nomodPaymentServices: NomodPaymentServices) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      let customer: { id?: string } = {};

      const existingCustomer =
        await this.nomodPaymentServices.checkCustomerAlreadyExist(
          createOrderDto.customer.email,
        );

      if (existingCustomer.results.length !== 0) {
        customer = existingCustomer.results[0];
      } else {
        customer = await this.nomodPaymentServices.createCustomer({
          first_name: createOrderDto.customer.first_name,
          last_name: createOrderDto.customer.last_name,
          email: createOrderDto.customer.email,
        });
      }

      const payment = await this.nomodPaymentServices.createInvoice({
        currency: 'AED',
        items: createOrderDto.items,
        customer: customer?.id,
        due_date: '2025-06-13',
      });

      return {
        message: 'Payment created',
        data: payment,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async paymentStatus(id: string) {
    try {
      const payment = await this.nomodPaymentServices.invoceStatus(id);
      return {
        message: 'Payment status is retrived successfully',
        data: payment,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

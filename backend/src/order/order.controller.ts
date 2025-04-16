import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { customerType, fabricType } from './types';
import { orderPlaced } from 'src/util/mail/order/orderPlaced';
import { createInvoice, createOrder, generateAccessToken } from 'src/services/ngenius-payments';
import { orderPending } from 'src/util/mail/order/OrderPending';

@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() body: { customer: customerType; fabric: fabricType }) {
    try {

      const {customer,fabric} = body

      const {access_token} = await generateAccessToken()

      // const description = `Type: ${fabric.type}, Cover Type: ${fabric.coverType}, Window Type: ${fabric.windowType}, Room Name: ${fabric.roomName}, Live In Dubai: ${fabric.liveInDubai}, Height: ${fabric.height}, Width: ${fabric.width}, Panel Type: ${fabric.panelType}, Hanging Style: ${fabric.hangingStyle}, Lining: ${fabric.lining}, Installation Method: ${fabric.installationMethod}, Installation Item: Name - ${fabric.installationItem.name}, Material - ${fabric.installationItem.meterial}, SQM: ${fabric.sqm}, Making Price: ${fabric.price}, Boxed & Postage: ${50}`;

     

      // const data = await createInvoice({
      //   "firstName": customer.fName,
      //   "lastName": customer.lName,
      //   "email": customer.email,
      //   "transactionType": "PURCHASE",
      //   "emailSubject": "Invoice from My Thread",
      //   "invoiceExpiryDate": new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-CA').split('/').join('-'),
      //   "items": [
      //     {
      //       "description": description,
      //       "totalPrice": {
      //         "currencyCode": "AED",
      //         "value": (fabric.price+50)*100
      //       },
      //       "quantity": 1
      //     }
      //   ],
      //   "total": {
      //     "currencyCode": "AED",
      //     "value": (fabric.price+50)*100
      //   },
      //   "message": `Thank you for your curtain customization details. We've received your quote and will proceed with the next steps.`,
      //   access_token: access_token,
      //   skipInvoiceCreatedEmailNotification: true
      // })


      const data = await createOrder({
        access_token,
        action:"PURCHASE",
        amount:{
          currencyCode:"AED",
          value:(fabric.price+50) * 100
        },
        emailAddress:customer.email,
      })
      
      orderPending(customer,fabric)
      return {message:"Order placed",data:data}

    } catch (error) {}
  }


@Post('/webhook')
webhook(@Body() body:any){
    console.log(body);
}

}

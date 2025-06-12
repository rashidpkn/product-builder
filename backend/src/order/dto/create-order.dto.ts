export class CreateOrderDto {
  customer: {
    first_name: string;
    last_name: string;
    email: string;
  };
  items: {
    name: string;
    amount: string;
    quantity: number;
  }[];
}

import axios from 'axios';
import { Injectable } from '@nestjs/common';

const api = axios.create({
  baseURL: 'https://api.nomod.com',
  headers: {
    'X-API-KEY': 'xxxxxxxx',
    'Content-Type': 'application/json',
  },
});

@Injectable()
export class NomodPaymentServices {
  async createCustomer(body: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    business_name?: string;
    job_title?: string;
    country?: string;
    province?: string;
    street?: string;
    city?: string;
    zip_code?: string;
  }): Promise<{
    id: string;
    created: Date;
    first_name: string;
    last_name: string;
    business_name: string;
    job_title: string;
    province: number;
    city: string;
    street: string;
    zip_code: string;
    country: string;
    email: string;
    phone_number: string;
  }> {
    try {
      const { data } = await api.post('/v1/customers', body);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async checkCustomerAlreadyExist(email: string): Promise<{
    count: number;
    next: string;
    previous: string;
    results: {
      id: string;
      created: Date;
      first_name: string;
      last_name: string;
      business_name: string;
      job_title: string;
      province: number;
      city: string;
      street: string;
      zip_code: string;
      country: string;
      email: string;
      phone_number: string;
    }[];
  }> {
    try {
      const { data } = await api.get(
        `https://api.nomod.com/v1/customers?email=${email}`,
      );
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async createInvoice(body: {
    currency: string;
    items: { name: string; amount: string; quantity: number }[];
    customer: string;
    due_date: string;
    discount_percentage?: number;
    invoice_number?: string;
    title?: string;
    note?: string;
    shipping_address_required?: boolean;
    starts_at?: string;
    custom_fields?: { name: string }[];
    success_url?: string;
    failure_url?: string;
  }) {
    try {
      const { data } = await api.post('/v1/invoices', body);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async invoceStatus(id: string): Promise<{
    id: string;
    reference_id: string;
    created: Date;
    title: string;
    code: string;
    url: string;
    amount: string;
    currency: string;
    status: string;
    discount: string;
    service_fee: string;
    tax: string;
    shipping_address_required: boolean;
    items: {
      amount: string;
      name: string;
      total_amount: string;
      quantity: number;
      product: null;
      sku: null;
    }[];
    taxes: any[];
    note: string;
    expiry: null;
    discount_percentage: null;
    service_fee_percentage: null;
    tip_percentage: null;
    user: {
      id: string;
      first_name: string;
      last_name: string;
    };
    tip: string;
    invoice_number: string;
    service_date: null;
    due_date: Date;
    interval_count: number;
    starts_at: Date;
    ends_at: null;
    due_days: number;
    custom_fields: null;
    source: string;
    files: any[];
    reminders: any[];
    events: Event[];
    customer: {
      first_name: string;
      last_name: string;
      email: string;
    };
  }> {
    try {
      const { data } = await api.get(`/v1/invoices/${id}`);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

import { PaymentMethod } from 'src/app/models';

export interface SaleListItem {
  id: number;
  date: string;
  value: number;
  paymentMethod: PaymentMethod;
}

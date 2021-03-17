import { PaymentMethod } from 'app/models/enums';

export interface SaleListItem {
  id: number;
  date: string;
  value: number;
  paymentMethod: PaymentMethod;
}

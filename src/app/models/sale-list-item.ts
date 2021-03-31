import { SaleProductListItemDetail } from 'app/models/sale-product-list-item-detail';

export interface SaleListItem {
  id: number;
  date: Date;
  value: number;
  paymentMethod: string;
  products?: SaleProductListItemDetail[];
}

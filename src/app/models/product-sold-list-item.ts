import { Category } from '@app/models';

export interface ProductSoldListItem {
  id: number;
  name: string;
  category: Category;
  quantity: number;
  price: number;
}

import { Category } from 'src/app/models/enums';

export interface ProductSoldListItem {
  id: number;
  name: string;
  category: Category;
  quantity: number;
  price: number;
}

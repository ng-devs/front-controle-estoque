import { ProductStockListItem, SaleListItem } from 'src/app/models';
import { Category, PaymentMethod } from 'src/app/models/enums';
import { ProductSoldListItem } from 'src/app/models/product-sold-list-item';
import { PaymentShape } from '../pages/cadastros/forma-pagamento/models/payment-shape.model';

export const PRODUCTS_SOLD_MOCK: ProductSoldListItem[] = [
  { id: 1, name: 'Estojo', category: Category.Papelaria, quantity: 300, price: 3.5 },
  { id: 2, name: 'Sombra', category: Category.Maquiagem, quantity: 200, price: 10 },
  { id: 3, name: 'Carteira', category: Category.Utilidades, quantity: 155, price: 30 },
];

export const PRODUCTS_STOCK_MOCK: ProductStockListItem[] = [
  { id: 1, name: 'Lapis', quantity: 12 },
  { id: 2, name: 'Carteira', quantity: 5 },
  { id: 3, name: 'Caderno', quantity: 10 },
];

export const SALES_MOCK: SaleListItem[] = [
  { id: 1, date: '01/01', value: 350, paymentMethod: PaymentMethod.Cash },
  { id: 2, date: '05/01', value: 230, paymentMethod: PaymentMethod.DebitCard },
  { id: 3, date: '10/01', value: 50, paymentMethod: PaymentMethod.CreditCard },
];

export const PAYMENT_SHAPE: PaymentShape[] = [
  { id: 1, description: 'Cartão de crédito' },
  { id: 2, description: 'PIX' },
  { id: 3, description: 'Boleto' },
];

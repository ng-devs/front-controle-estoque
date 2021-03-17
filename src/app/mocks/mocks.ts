import {
  CategoriaListItem,
  PaymentMethod,
  ProductSoldListItem,
  ProductStockListItem,
  SaleListItem,
} from '@app/models';

export const PRODUCTS_SOLD_MOCK: ProductSoldListItem[] = [
  { id: 1, name: 'Estojo', category: 'Papelaria', quantity: 300, price: 3.5 },
  { id: 2, name: 'Sombra', category: 'Maquiagem', quantity: 200, price: 10 },
  { id: 3, name: 'Carteira', category: 'Utilidades', quantity: 155, price: 30 },
];

export const CATEGORY_MOCK: CategoriaListItem[] = [
  { id: 1, name: 'Papelaria' },
  { id: 2, name: 'Maquiagem' },
  { id: 3, name: 'Utilidades' },
];

export const PRODUCTS_STOCK_MOCK: ProductStockListItem[] = [
  { id: 1, name: 'Lapis', quantity: 12 },
  { id: 2, name: 'Carteira', quantity: 5 },
  { id: 3, name: 'Caderno', quantity: 10 },
];

export const SALES_MOCK: SaleListItem[] = [
  { id: 1, date: '01/01', value: 350, paymentMethod: 'Dinheiro' },
  { id: 2, date: '05/01', value: 230, paymentMethod: 'Cartão de Débito' },
  { id: 3, date: '10/01', value: 50, paymentMethod: 'Cartão de Crédito' },
];

export const PAYMENT_SHAPE: PaymentMethod[] = [
  { id: 1, description: 'Cartão de crédito' },
  { id: 2, description: 'PIX' },
  { id: 3, description: 'Boleto' },
];

import {
  CategoriaListItem,
  PaymentMethod,
  ProductSoldListItem,
  ProductStockListItem,
  SaleListItem,
} from '@app/models';
import { ProdutoListItem } from 'app/components/grid/produto.model';

export interface Product {
  id: number;
  name: string;
  categoryID: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Lapis', categoryID: 1 },
  { id: 2, name: 'Carteira', categoryID: 2 },
  { id: 3, name: 'Caderno', categoryID: 3 },
];

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
  {
    id: 1,
    date: new Date(),
    value: 350,
    paymentMethod: 'Dinheiro',
    products: [
      { id: 1, name: 'Estojo', quantity: 2, unityPrice: 3, total: 6.0 },
      { id: 2, name: 'Sombra', quantity: 2, unityPrice: 30.0, total: 60.0 },
      { id: 3, name: 'Carteira', quantity: 5, unityPrice: 20.0, total: 100.0 },
    ],
  },
  {
    id: 2,
    date: new Date(),
    value: 230,
    paymentMethod: 'Cartão de Débito',
    products: [
      { id: 1, name: 'Estojo', quantity: 2, unityPrice: 3, total: 6.0 },
      { id: 2, name: 'Sombra', quantity: 2, unityPrice: 30.0, total: 60.0 },
      { id: 3, name: 'Carteira', quantity: 5, unityPrice: 20.0, total: 100.0 },
    ],
  },
  {
    id: 3,
    date: new Date(),
    value: 50,
    paymentMethod: 'Cartão de Crédito',
    products: [
      { id: 1, name: 'Estojo', quantity: 2, unityPrice: 3, total: 6.0 },
      { id: 2, name: 'Sombra', quantity: 2, unityPrice: 30.0, total: 60.0 },
      { id: 3, name: 'Carteira', quantity: 5, unityPrice: 20.0, total: 100.0 },
    ],
  },
];

export const PAYMENT_METHOD: PaymentMethod[] = [
  { id: 1, description: 'Cartão de crédito' },
  { id: 2, description: 'PIX' },
  { id: 3, description: 'Boleto' },
];

export const PRODUTOS_MAIS_VENDIDOS: ProdutoListItem[] = [
  { id: 1, nome: 'Caneta', categoria: 'Papelaria', quantidade: 200 },
  { id: 1, nome: 'Borracha', categoria: 'Papelaria', quantidade: 20 },
];

import { Component, OnInit } from '@angular/core';

export const enum Category {
  Papelaria,
  Maquiagem,
  Utilidades,
}

export interface ProductListItem {
  id: number;
  name: string;
  category: Category;
  quantity: number;
  price: number;
}

export const PRODUCTS_MOCK: ProductListItem[] = [
  { id: 1, name: 'Estojo', category: Category.Papelaria, quantity: 300, price: 3.5 },
  { id: 2, name: 'Sombra', category: Category.Maquiagem, quantity: 200, price: 10 },
  { id: 3, name: 'Carteira', category: Category.Utilidades, quantity: 155, price: 30 },
];

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'actions'];
  dataSource = PRODUCTS_MOCK;

  ngOnInit(): void {}

  add() {
    alert('adding test');
  }

  edit(item: ProductListItem) {
    alert(`Voce editou o produto ${item.id} - ${item.name}`);
  }
  delete(item: ProductListItem) {
    alert(`Voce deletou o produto ${item.id} - ${item.name}`);
  }
  addQuantity(item: ProductListItem) {
    alert(`Voce adicionou uma quantidade ao produto ${item.id} - ${item.name}`);
  }
}

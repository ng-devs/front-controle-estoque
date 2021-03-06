import { Component, OnInit } from '@angular/core';
import { PRODUCTS_SOLD_MOCK } from 'src/app/mock/mocks';
import { ProductSoldListItem } from 'src/app/models/product-sold-list-item';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'actions'];
  dataSource = PRODUCTS_SOLD_MOCK;

  ngOnInit(): void {}

  add() {
    alert('adding test');
  }

  edit(item: ProductSoldListItem) {
    alert(`Voce editou o produto ${item.id} - ${item.name}`);
  }
  delete(item: ProductSoldListItem) {
    alert(`Voce deletou o produto ${item.id} - ${item.name}`);
  }
  addQuantity(item: ProductSoldListItem) {
    alert(`Voce adicionou uma quantidade ao produto ${item.id} - ${item.name}`);
  }
}

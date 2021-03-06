import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PRODUCTS_STOCK_MOCK, SALES_MOCK } from 'src/app/mock/mocks';
import { ProductStockListItem, SaleListItem } from 'src/app/models';

export type TableColumn<T> = {
  [Key in keyof T]: string;
};

@Component({
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  constructor() {}

  productsStock = PRODUCTS_STOCK_MOCK;

  stockColumns: TableColumn<ProductStockListItem> = {
    id: '#',
    name: 'First Name',
    quantity: 'Quantidade',
  };

  sales = SALES_MOCK;
  salesColumns: TableColumn<SaleListItem> = {
    id: '#',
    date: 'Data',
    value: 'Valor',
    paymentMethod: 'Forma de Pagamento',
  };

  @ViewChild('stockRef') private stockModalComponent: ModalComponent;
  @ViewChild('salesRef') private salesModalComponent: ModalComponent;

  ngOnInit(): void {}

  showProductsStockDetails() {
    this.stockModalComponent.open();
  }

  showSalesDetails() {
    this.salesModalComponent.open();
  }
}

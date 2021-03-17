import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '@app/components';
import { PRODUCTS_STOCK_MOCK, SALES_MOCK } from '@app/mocks';
import { ProductStockListItem, SaleListItem, TableColumns } from '@app/models';

@Component({
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  productsStock = PRODUCTS_STOCK_MOCK;
  sales = SALES_MOCK;

  stockColumns: TableColumns<ProductStockListItem> = {
    id: '#',
    name: 'First Name',
    quantity: 'Quantidade',
  };

  salesColumns: TableColumns<SaleListItem> = {
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

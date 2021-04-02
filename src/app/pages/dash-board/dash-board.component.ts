import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '@app/components';
import { PRODUCTS_STOCK_MOCK, SALES_MOCK } from '@app/mocks';
import { ProductStockListItem, SaleListItem, TableColumns } from '@app/models';

@Component({
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  @ViewChild('stockRef') private stockModalComponent: ModalComponent;
  @ViewChild('salesRef') private salesModalComponent: ModalComponent;

  productsStock = PRODUCTS_STOCK_MOCK;
  sales = SALES_MOCK;

  stockColumns: TableColumns<ProductStockListItem> = {
    id: { label: '#' },
    name: { label: 'First Name' },
    quantity: { label: 'Quantidade' },
  };

  salesColumns: TableColumns<SaleListItem> = {
    id: { label: '#' },
    date: { label: 'Data', pipe: { name: 'date', args: 'dd/MM/yyyy' } },
    value: { label: 'Valor', pipe: { name: 'currency' } },
    paymentMethod: { label: 'Forma de Pagamento' },
  };

  ngOnInit(): void {}

  showProductsStockDetails() {
    this.stockModalComponent.open();
  }

  showSalesDetails() {
    this.salesModalComponent.open();
  }
}

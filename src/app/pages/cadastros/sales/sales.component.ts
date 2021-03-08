import { Component, OnInit } from '@angular/core';
import { SALES_MOCK } from 'src/app/mock/mocks';
import { Action, ActionEvent, SaleListItem, TableColumn } from 'src/app/models';

@Component({
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor() {}

  dataSource = SALES_MOCK;
  productColumns: TableColumn<SaleListItem> = {
    id: '#',
    date: 'Data',
    value: 'Valor',
    paymentMethod: 'Forma de pagamento',
  };

  customActions: Action[] = [
    {
      buttonText: 'Ver detalhes',
      iconName: 'remove_red_eye',
      eventName: 'show',
    },
  ];

  ngOnInit(): void {}

  add() {
    alert('venda adicionada');
  }

  showDetails(action: ActionEvent<SaleListItem>) {
    alert(`você está vendo os detalhes da venda ID: ${action.item.id}`);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SALES_MOCK } from '@app/mocks';
import { Action, ActionEvent, SaleListItem, TableColumns } from '@app/models';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss'],
})
export class SalesListComponent {
  dataSource = SALES_MOCK;
  productColumns: TableColumns<SaleListItem> = {
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

  constructor(private router: Router) {}

  add() {
    this.router.navigateByUrl('vendas/create-edit');
  }

  showDetails(action: ActionEvent<SaleListItem>) {
    alert(`você está vendo os detalhes da venda ID: ${action.item.id}`);
  }
}

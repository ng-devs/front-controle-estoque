import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GenericListComponent, ModalComponent } from '@app/components';
import { SALES_MOCK } from '@app/mocks';
import { Action, ActionEvent, SaleListItem, TableColumns } from '@app/models';
import { SaleProductListItemDetail } from 'app/models/sale-product-list-item-detail';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss'],
})
export class SalesListComponent {
  @ViewChild('salesRef') private $salesModalComponent: ModalComponent;
  @ViewChild('customMatTable') private $table: GenericListComponent<SaleProductListItemDetail>;
  dataSource = SALES_MOCK;

  productColumns: TableColumns<SaleListItem> = {
    id: { label: '#' },
    date: { label: 'Data', pipe: { name: 'date', args: 'dd/MM/yyyy' } },
    value: { label: 'Valor', pipe: { name: 'currency' } },
    paymentMethod: { label: 'Forma de pagamento' },
  };

  customActions: Action[] = [
    {
      buttonText: 'Ver detalhes',
      iconName: 'remove_red_eye',
      eventName: 'show',
    },
  ];

  saleProductItemColumns: TableColumns<SaleProductListItemDetail> = {
    id: { label: '#' },
    name: { label: 'Produto' },
    quantity: { label: 'Quantidade' },
    unityPrice: { label: 'Valor unitário', pipe: { name: 'currency' } },
    total: { label: 'Valor total', pipe: { name: 'currency' } },
  };

  constructor(private router: Router) {}

  add() {
    this.router.navigateByUrl('vendas/create-edit');
  }

  currentSaleListItem: SaleListItem;

  showDetails(action: ActionEvent<SaleListItem>) {
    // this.$salesModalComponent.title = `Detalhes da venda ${action.item.id}`;
    this.currentSaleListItem = action.item;
    this.$table.tableData = action.item.products!;
    this.$salesModalComponent.open();
  }
}

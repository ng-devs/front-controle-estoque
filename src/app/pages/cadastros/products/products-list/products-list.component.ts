import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS_SOLD_MOCK } from '@app/mocks';
import {
  Action,
  ActionEvent,
  ProductSoldListItem,
  TableColumns,
} from '@app/models';

@Component({
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  dataSource = PRODUCTS_SOLD_MOCK;

  productColumns: TableColumns<ProductSoldListItem> = {
    id: { label: '#' },
    name: { label: 'Nome' },
    category: { label: 'Categoria' },
    quantity: { label: 'Quantidade' },
    price: { label: 'Preço', pipe: { name: 'currency' } },
  };

  customActions: Action[] = [
    {
      buttonText: 'Adicionar Quantidade',
      iconName: 'add',
      eventName: 'add',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleActions(actionEvent: ActionEvent<ProductSoldListItem>) {
    switch (actionEvent.eventName) {
      case 'add':
        this.addQuantity(actionEvent.item);
        break;
      case 'edit':
        this.edit(actionEvent.item);
        break;
      case 'delete':
        this.delete(actionEvent.item);
        break;

      default:
        throw new Error('action não mapeada');
    }
  }

  edit(item: ProductSoldListItem) {
    this.router.navigate([`cadastros/produtos/edit/${item.id}`]);
  }

  delete(item: ProductSoldListItem) {
    alert(`Voce deletou o produto ${item.id} - ${item.name}`);
  }

  addQuantity(item?: ProductSoldListItem) {
    alert(
      `Voce adicionou uma quantidade ao produto ${item?.id} - ${item?.name}`
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { PRODUCTS_SOLD_MOCK } from '@app/mocks';
import { Action, ActionEvent, ProductSoldListItem, TableColumns } from '@app/models';

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

  add() {
    alert(`Produto adicionado `);
  }

  edit(item: ProductSoldListItem) {
    alert(`Voce editou o produto ${item.id} - ${item.name}`);
  }

  delete(item: ProductSoldListItem) {
    alert(`Voce deletou o produto ${item.id} - ${item.name}`);
  }

  addQuantity(item?: ProductSoldListItem) {
    alert(`Voce adicionou uma quantidade ao produto ${item?.id} - ${item?.name}`);
  }
}

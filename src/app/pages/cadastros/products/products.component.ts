import { Component, OnInit } from '@angular/core';
import { PRODUCTS_SOLD_MOCK } from 'src/app/mock/mocks';
import { Action, ActionEvent, ProductSoldListItem, TableColumn } from 'src/app/models';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  dataSource = PRODUCTS_SOLD_MOCK;
  productColumns: TableColumn<ProductSoldListItem> = {
    id: '#',
    name: 'Nome',
    category: 'Categoria',
    quantity: 'Quantidade',
    price: 'Preço',
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
        this.add();
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
    alert('Item adicionado');
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

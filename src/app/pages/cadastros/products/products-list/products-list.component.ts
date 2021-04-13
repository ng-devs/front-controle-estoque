import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@app/components';
import { PRODUCTS_SOLD_MOCK } from '@app/mocks';
import {
  Action,
  ActionEvent,
  ProductSoldListItem,
  TableColumns,
} from '@app/models';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit, OnDestroy {
  @ViewChild('modalRef') private modal: ModalComponent;
  dataSource = PRODUCTS_SOLD_MOCK;
  selectedItem: ProductSoldListItem;
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

  private subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
    this.selectedItem = item;
    const modalRef = this.modal.open();
    this.subscription.add(
      modalRef.afterClosed().subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }

        this.dataSource = this.dataSource.filter(
          (category) => category !== this.selectedItem
        );
      })
    );
  }

  addQuantity(item?: ProductSoldListItem) {
    alert(
      `Voce adicionou uma quantidade ao produto ${item?.id} - ${item?.name}`
    );
  }
}

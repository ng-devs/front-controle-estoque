import { Component } from '@angular/core';
import { CATEGORY_MOCK } from '@app/mocks';
import { ActionEvent, CategoriaListItem, TableColumns } from '@app/models';

@Component({
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
})
export class CategoriaListComponent {
  dataSource = CATEGORY_MOCK;
  productColumns: TableColumns<CategoriaListItem> = {
    id: '#',
    name: 'Nome',
  };

  add() {
    alert('categoria  adicionada');
  }

  handleActions(actionEvent: ActionEvent<CategoriaListItem>) {
    switch (actionEvent.eventName) {
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

  edit(item: CategoriaListItem) {
    alert(`Voce editou a categoria ${item.id} - ${item.name}`);
  }

  delete(item: CategoriaListItem) {
    alert(`Voce deletou a categoria ${item.id} - ${item.name}`);
  }
}

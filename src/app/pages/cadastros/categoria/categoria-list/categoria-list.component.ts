import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@app/components';
import { CATEGORY_MOCK } from '@app/mocks';
import { ActionEvent, CategoriaListItem, TableColumns } from '@app/models';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './categoria-list.component.html',
})
export class CategoriaListComponent implements OnDestroy {
  @ViewChild('modalRef') private modal: ModalComponent;
  dataSource = CATEGORY_MOCK;
  selectedItem: CategoriaListItem;
  productColumns: TableColumns<CategoriaListItem> = {
    id: { label: '#' },
    name: { label: 'Nome' },
  };
  private subscription = new Subscription();

  constructor(private router: Router, private toastService: HotToastService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    this.router.navigate([`cadastros/categoria/edit/${item.id}`]);
  }

  delete(item: CategoriaListItem) {
    this.selectedItem = item;
    const modalRef = this.modal.open();
    this.subscription.add(
      modalRef.afterClosed().subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }
        this.toastService.success('removido com sucesso!');
        this.dataSource = this.dataSource.filter(
          (category) => category !== this.selectedItem
        );
      })
    );
  }
}

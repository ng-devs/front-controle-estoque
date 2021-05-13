import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '@app/components';
import { PAYMENT_METHOD } from '@app/mocks';
import { ActionEvent, PaymentMethod, TableColumns } from '@app/models';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './payment-method-list.component.html',
})
export class PaymentMethodListComponent implements OnDestroy {
  @ViewChild('modalRef') private modal: ModalComponent;
  selectedItem: PaymentMethod;
  dataSource = PAYMENT_METHOD;
  productColumns: TableColumns<PaymentMethod> = {
    id: { label: '#' },
    description: { label: 'Descrição' },
  };

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: HotToastService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add() {
    void this.router.navigate(['..', 'create-edit'], {
      relativeTo: this.route,
    });
  }

  handleActions(actionEvent: ActionEvent<PaymentMethod>) {
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

  edit(item: PaymentMethod) {
    void this.router.navigate(['..', 'create-edit', item.id], {
      relativeTo: this.route,
    });
  }

  delete(item: PaymentMethod) {
    this.selectedItem = item;
    const modalRef = this.modal.open();
    this.subscription.add(
      modalRef.afterClosed().subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }
        this.toastService.success('removido com sucesso!');
        this.dataSource = this.dataSource.filter(
          (paymentMethod) => paymentMethod !== this.selectedItem
        );
      })
    );
  }
}

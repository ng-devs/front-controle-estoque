import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PAYMENT_METHOD } from '@app/mocks';
import { ActionEvent, PaymentMethod, TableColumns } from '@app/models';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss'],
})
export class PaymentMethodListComponent implements OnInit {
  dataSource: Observable<PaymentMethod[]>;
  productColumns: TableColumns<PaymentMethod> = {
    id: '#',
    description: 'Descrição',
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataSource = of(PAYMENT_METHOD);
  }

  add() {
    this.router.navigate(['..', 'create-edit'], { relativeTo: this.route });
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
    this.router.navigate(['..', 'create-edit', item.id], { relativeTo: this.route });
  }

  delete(item: PaymentMethod) {
    alert(`Voce deletou a forma de pagamento ${item.id} - ${item.description}`);
  }
}

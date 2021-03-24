import { Component, OnInit } from '@angular/core';
import { PAYMENT_METHOD } from '@app/mocks';
import { ActionEvent, PaymentMethod, TableColumns } from '@app/models';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './forma-pagamento-list.component.html',
  styleUrls: ['./forma-pagamento-list.component.scss'],
})
export class FormaPagamentoListComponent implements OnInit {
  dataSource: Observable<PaymentMethod[]>;
  productColumns: TableColumns<PaymentMethod> = {
    id: '#',
    description: 'Descrição',
  };

  ngOnInit(): void {
    this.dataSource = of(PAYMENT_METHOD);
  }

  add() {
    alert(`Forma de pagamento adicionada`);
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
    alert(`Voce editou a forma de pagamento ${item.id} - ${item.description}`);
  }

  delete(item: PaymentMethod) {
    alert(`Voce deletou a forma de pagamento ${item.id} - ${item.description}`);
  }
}

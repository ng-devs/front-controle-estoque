import { Component, OnInit } from '@angular/core';
import { PAYMENT_SHAPE } from '@app/mocks';
import { ActionEvent, PaymentShape, TableColumns } from '@app/models';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './forma-pagamento-list.component.html',
  styleUrls: ['./forma-pagamento-list.component.scss'],
})
export class FormaPagamentoListComponent implements OnInit {
  dataSource: Observable<PaymentShape[]>;
  productColumns: TableColumns<PaymentShape> = {
    id: '#',
    description: 'Descrição',
  };

  ngOnInit(): void {
    this.dataSource = of(PAYMENT_SHAPE);
  }

  add() {
    alert(`Forma de pagamento adicionada`);
  }

  handleActions(actionEvent: ActionEvent<PaymentShape>) {
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

  edit(item: PaymentShape) {
    alert(`Voce editou a forma de pagamento ${item.id} - ${item.description}`);
  }

  delete(item: PaymentShape) {
    alert(`Voce deletou a forma de pagamento ${item.id} - ${item.description}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYMENT_SHAPE } from 'src/app/mocks/mocks';
import { ActionEvent } from 'src/app/models';
import { TableColumns } from 'src/app/models/table-columns';
import { PaymentShape } from '../models/payment-shape.model';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Observable<PaymentShape[]>;
  productColumns: TableColumns<PaymentShape> = {
    id: '#',
    description: 'Descrição',
  };

  ngOnInit(): void {
      this.dataSource = of(PAYMENT_SHAPE);
  }

  add() {
    alert(`adicionar`);
  }

  showDetails(action: ActionEvent<PaymentShape>) {
    alert(`você está vendo os detalhes da venda ID: ${action.item.id}`);
  }
}

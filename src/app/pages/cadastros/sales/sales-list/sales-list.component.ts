import { animate, style, transition, trigger } from '@angular/animations';
import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericListComponent, ModalComponent } from '@app/components';
import { SALES_MOCK } from '@app/mocks';
import { Action, ActionEvent, SaleListItem, TableColumns } from '@app/models';
import { SaleProductListItemDetail } from 'app/models/sale-product-list-item-detail';
import { merge } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss'],
  animations: [
    trigger('displayFilter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('100ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0, transform: 'translateX(-100%)' }))]),
    ]),
  ],
})
export class SalesListComponent implements OnInit {
  @ViewChild('salesRef') private $salesModalComponent: ModalComponent;
  @ViewChild('customMatTable') private $table: GenericListComponent<SaleProductListItemDetail>;
  dataSource = SALES_MOCK;
  currentSaleListItem: SaleListItem;
  productColumns: TableColumns<SaleListItem> = {
    id: { label: '#' },
    date: { label: 'Data', pipe: { name: 'date', args: 'dd/MM/yyyy' } },
    value: { label: 'Valor', pipe: { name: 'currency' } },
    paymentMethod: { label: 'Forma de pagamento' },
  };

  customActions: Action[] = [
    {
      buttonText: 'Ver detalhes',
      iconName: 'remove_red_eye',
      eventName: 'show',
    },
  ];

  saleProductItemColumns: TableColumns<SaleProductListItemDetail> = {
    id: { label: '#' },
    name: { label: 'Produto' },
    quantity: { label: 'Quantidade' },
    unityPrice: { label: 'Valor unitário', pipe: { name: 'currency' } },
    total: { label: 'Valor total', pipe: { name: 'currency' } },
  };

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    merge(this.filterGroup.controls.valorStart.valueChanges, this.filterGroup.controls.valorEnd.valueChanges)
      .pipe(debounceTime(500))
      .subscribe(() => this.filtrarValor());

    merge(this.filterGroup.controls.dataStart.valueChanges, this.filterGroup.controls.dataEnd.valueChanges)
      .pipe(debounceTime(500))
      .subscribe(() => this.filtrarData());
  }

  add() {
    this.router.navigateByUrl('vendas/create-edit');
  }

  showDetails(action: ActionEvent<SaleListItem>) {
    this.currentSaleListItem = action.item;
    this.$table.tableData = action.item.products!;
    this.$salesModalComponent.open();
  }

  displayValor = false;
  displayCalendar = false;

  filterGroup = new FormGroup({
    dataStart: new FormControl('', Validators.required),
    dataEnd: new FormControl('', Validators.required),
    valorStart: new FormControl('', Validators.required),
    valorEnd: new FormControl('', Validators.required),
  });

  filtrarData() {
    let source = SALES_MOCK;
    const { dataStart, dataEnd } = this.filterGroup.controls;
    if (dataStart.valid && dataEnd.valid) {
      source = SALES_MOCK.filter((c) => c.date >= dataStart.value && c.date <= dataEnd.value);
    }
    this.dataSource = source;
  }

  filtrarValor() {
    let source = SALES_MOCK;
    const { valorStart, valorEnd } = this.filterGroup.controls;
    if (valorStart.valid && valorEnd.valid) {
      source = SALES_MOCK.filter((c) => c.value >= +valorStart.value && c.value <= +valorEnd.value);
    }
    this.dataSource = source;
  }

  displayFilterRangeValue() {
    this.filterGroup.reset();
    this.displayCalendar = false;
    this.displayValor = !this.displayValor;
  }

  displayFilterRangeDate() {
    this.filterGroup.reset();
    this.displayValor = false;
    this.displayCalendar = !this.displayCalendar;
  }
}


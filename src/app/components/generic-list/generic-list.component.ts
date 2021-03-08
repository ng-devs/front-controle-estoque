import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action, ActionEvent } from 'src/app/models';

@Component({
  selector: 'generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
})
export class GenericListComponent<T> implements OnInit {
  readonly defaultActions: Action[] = [
    {
      buttonText: 'Editar',
      eventName: 'edit',
      iconName: 'edit',
    },
    {
      buttonText: 'Deletar',
      eventName: 'delete',
      iconName: 'delete',
    },
  ];
  objectKeys = Object.keys;
  allDisplayedColumns: any;
  @Input() itemsDisplayedColumns: any;
  @Input() hasDefaultActions = true;
  @Input() actions: Action[] = [];
  @Input() tableData: T[];
  @Output() actionEvent = new EventEmitter<ActionEvent<T>>();

  ngOnInit(): void {
    this.hasDefaultActions && this.actions.splice(0, 0, ...this.defaultActions);
    this.allDisplayedColumns = { ...this.itemsDisplayedColumns };
    this.allDisplayedColumns['actions'] = 'actions';
  }
}

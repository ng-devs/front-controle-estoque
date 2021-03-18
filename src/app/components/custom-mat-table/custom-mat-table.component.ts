import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-mat-table',
  templateUrl: './custom-mat-table.component.html',
  styleUrls: ['./custom-mat-table.component.scss'],
})
export class CustomMatTableComponent<T> {
  @Input() tableData: T[];
  @Input() displayedColumns: any;
  objectKeys = Object.keys;
}

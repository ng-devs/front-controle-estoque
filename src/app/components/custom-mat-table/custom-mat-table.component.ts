import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-mat-table',
  templateUrl: './custom-mat-table.component.html',
  styleUrls: ['./custom-mat-table.component.scss'],
})
export class CustomMatTableComponent<T> implements OnInit {
  @Input() tableData: T[];
  @Input() displayedColumns: any;
  objectKeys = Object.keys;

  constructor() {}
  ngOnInit() {}
}

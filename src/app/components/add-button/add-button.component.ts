import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}

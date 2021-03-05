import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() btnBgColor: string;
  @Input() btnText: string;
  @Input() contentColor: string;
  @Input() title: string;
  @Input() value: number;
  @Input() extraData: string;
  @Output() btnEvent = new EventEmitter<void>();

  ngOnInit(): void {}
}

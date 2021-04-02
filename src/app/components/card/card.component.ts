import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() btnBgColor: string;
  @Input() btnText: string;
  @Input() contentColor: string;
  @Input() title: string;
  @Input() value: number;
  @Input() extraData: string;
  @Output() btnEvent = new EventEmitter<void>();
}

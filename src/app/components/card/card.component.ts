import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() btnBgColor: string;
  @Input() contentColor: string;
  @Input() title: string;
  @Input() value: number;
  @Input() extraData: string;

  ngOnInit(): void {}
}

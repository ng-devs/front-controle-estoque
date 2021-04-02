import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngd-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
  @Input() primaryText: string;
  @Input() secondaryText: string;
}

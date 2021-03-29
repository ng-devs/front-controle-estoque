import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericBaseFormFieldComponent } from 'app/components/generic-base-form-field/generic-base-form-field.component';

@Component({
  selector: 'generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss'],
})
export class GenericSelectComponent extends GenericBaseFormFieldComponent {
  @Input() items: any[];
  @Input() keyName: string = 'key';
  @Input() valueName: string = 'value';
  @Output() changeSelect = new EventEmitter<any>();
}

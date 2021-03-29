import { Component, Input } from '@angular/core';
import { GenericBaseFormFieldComponent } from 'app/components/generic-base-form-field/generic-base-form-field.component';

@Component({
  selector: 'generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
})
export class GenericInputComponent extends GenericBaseFormFieldComponent {
  @Input() type: string;
  @Input() hasLabel: boolean = true;
}

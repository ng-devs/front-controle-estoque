import { Component, Input } from '@angular/core';
import { GenericBaseFormFieldComponent } from 'app/components/generic-base-form-field/generic-base-form-field.component';

@Component({
  selector: 'ngd-generic-input',
  templateUrl: './generic-input.component.html',
})
export class GenericInputComponent extends GenericBaseFormFieldComponent {
  @Input() type: string;
  @Input() hasLabel = true;
}

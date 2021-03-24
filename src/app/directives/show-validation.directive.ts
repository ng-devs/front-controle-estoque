import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { VALIDATIONS } from 'app/directives/validations';

@Directive({
  selector: '[showValidation]',
})
export class ShowValidationDirective {
  @Input('showValidation') controlName: string;

  constructor(private elementRef: ElementRef, private parent: ControlContainer) {}

  ngAfterContentInit(): void {
    const group = this.parent.control as FormGroup;
    const control = group.controls[this.controlName] as FormControl;

    const handleState = () => {
      const errorMessage = this.checkValidations(control);
      const errorMessageParent = this.checkValidations(group);
      const error = errorMessage || errorMessageParent;
      this.setInnerHTML(error);
    };

    control.statusChanges.subscribe(() => handleState());
    handleState();
  }

  private setInnerHTML(html: string) {
    this.elementRef.nativeElement.innerHTML = html;
  }

  private checkValidations(control: AbstractControl): string {
    return VALIDATIONS.find((c) => control.hasError(c.key))?.value(control) || '';
  }
}

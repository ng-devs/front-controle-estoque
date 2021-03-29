import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  template: '',
})
export class GenericBaseFormFieldComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() controlName: string;

  controlRef: FormControl;

  @Input() set control(control: AbstractControl) {
    this.controlRef = control as FormControl;
  }

  get control(): AbstractControl {
    return this.controlRef;
  }

  constructor(private container: ControlContainer) {}

  ngOnInit() {
    const formGroup = this.container.control as FormGroup;
    this.controlRef = this.controlRef || (formGroup.controls[this.controlName] as FormControl);
    this.controlName = this.controlName || this.getControlName(this.controlRef);
  }

  getControlName(control: AbstractControl): string {
    const formGroup = control?.parent!;
    return Object.keys(formGroup.controls).find((name) => control === formGroup.get(name))!;
  }
}

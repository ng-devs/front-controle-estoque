import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  template: '',
})
export class GenericBaseFormFieldComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() controlName: string;

  @Input()
  @HostBinding('style.width')
  width = '100%';

  @ViewChild(MatFormField, { read: ElementRef })
  formFieldElementRef: ElementRef<any>;

  @Input()
  @HostBinding('style.min-width')
  minWidth: string;

  @Input()
  @HostBinding('style.max-width')
  maxWidth: string;
  readonly defaultIdWidth = '100px';

  controlRef: FormControl;

  @Input() set control(control: AbstractControl) {
    this.controlRef = control as FormControl;
  }

  get control(): AbstractControl {
    return this.controlRef;
  }

  constructor(private container: ControlContainer) {}

  ngAfterViewInit(): void {
    console.log(this.formFieldElementRef);
    this.formFieldElementRef.nativeElement.style.width = this.width;
  }

  ngOnInit() {
    const formGroup = this.container.control as FormGroup;
    this.controlRef =
      this.controlRef || (formGroup.controls[this.controlName] as FormControl);
    this.controlName = this.controlName || this.getControlName(this.controlRef);
  }

  getControlName(control: AbstractControl): string {
    const formGroup = control?.parent;
    return (
      Object.keys(formGroup?.controls || {}).find(
        (name) => control === formGroup?.get(name)
      ) || ''
    );
  }
}

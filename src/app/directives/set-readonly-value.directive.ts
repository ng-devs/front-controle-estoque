import { Directive, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ngdSetReadOnlyValue]',
})
export class SetReadOnlyValueDirective implements OnInit, OnDestroy {

  @Input('ngdSetReadOnlyValue')
  propertyName: string;

  private subscription = new Subscription();

  constructor(
    private controlContainer: ControlContainer,
    private elementRef: ElementRef,
    private formGroupName: FormGroupDirective
  ) {}

  ngOnInit(): void {
    const group = this.controlContainer.control as FormGroup;
    const control = group?.controls[this.propertyName] as FormControl;
    this.subscription.add(
      control?.valueChanges?.subscribe((value) => {
        this.elementRef.nativeElement.value = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

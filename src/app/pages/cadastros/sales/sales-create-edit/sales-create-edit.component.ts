import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORY_MOCK, PAYMENT_METHOD } from '@app/mocks';

@Component({
  selector: 'app-sales-create-edit',
  templateUrl: './sales-create-edit.component.html',
  styleUrls: ['./sales-create-edit.component.scss'],
})
export class SalesCreateEditComponent {
  salesFormGroup: FormGroup;
  categories = CATEGORY_MOCK;
  paymentMethods = PAYMENT_METHOD;

  get canRemove(): boolean {
    console.log('canRemove');

    return !(this.products.length === 1);
  }

  get products() {
    return this.salesFormGroup.get('products') as FormArray;
  }

  constructor() {
    this.salesFormGroup = new FormGroup({
      products: new FormArray([
        new FormGroup({
          category: new FormControl('', [Validators.required]),
          quantity: new FormControl('', [Validators.required]),
        }),
      ]),
      paymentMethod: new FormControl('', [Validators.required]),
    });
  }

  addProduct() {
    this.products.push(
      new FormGroup({
        category: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
      })
    );
  }

  deleteProduct(index: number) {
    this.canRemove && this.products.removeAt(index);
  }

  save() {
    if (this.salesFormGroup.invalid) return;
    console.log(this.salesFormGroup.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PAYMENT_METHOD, PRODUCTS } from '@app/mocks';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sales-create-edit',
  templateUrl: './sales-create-edit.component.html',
  styleUrls: ['./sales-create-edit.component.scss'],
})
export class SalesCreateEditComponent implements OnInit {
  salesFormGroup: FormGroup;
  productsList = PRODUCTS;
  paymentMethods = PAYMENT_METHOD;
  removeProductDisabled$$ = new BehaviorSubject<boolean>(true);

  get products() {
    return this.salesFormGroup.get('products') as FormArray;
  }

  constructor() {
    this.initializeForm();
  }

  private initializeForm() {
    this.salesFormGroup = new FormGroup({
      products: new FormArray([this.createProduct()]),
      paymentForm: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  private getTotalQuantity(): number {
    return this.products.controls
      .map(({ value: controls }) => controls)
      .reduce((acc, cur) => (acc = acc + cur.quantity), 0);
  }

  private createProduct(): FormGroup {
    return new FormGroup({
      product: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }

  selectedItem({ value }: SelectedProduct, group: AbstractControl) {
    const categoryID = this.productsList.find((c) => c.id === value)?.categoryID;
    group.patchValue({ category: categoryID });
  }

  addProduct() {
    this.products.push(this.createProduct());
    this.removeProductDisabled$$.next(false);
  }

  deleteProduct(index: number) {
    const canRemove = this.products.length > 1;

    if (canRemove) {
      this.products.removeAt(index);
    }
    const canDisableButton = this.products.length === 1;
    this.removeProductDisabled$$.next(canDisableButton);
  }

  save() {
    if (this.salesFormGroup.invalid) return;
    console.log({
      ...{ date: new Date() },
      ...this.salesFormGroup.value,
      ...{ total: this.getTotalQuantity() },
    });

    this.salesFormGroup.reset();
    this.initializeForm();
  }
}

interface SelectedProduct {
  value: number;
}

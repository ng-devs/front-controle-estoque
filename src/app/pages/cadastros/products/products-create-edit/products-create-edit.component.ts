import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS_SOLD_MOCK, CATEGORY_MOCK } from '@app/mocks';

@Component({
  templateUrl: './products-create-edit.component.html',
  styleUrls: ['./products-create-edit.component.scss'],
})
export class ProductsCreateEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  isEditMode: boolean;
  categoryList = CATEGORY_MOCK;
  productList = PRODUCTS_SOLD_MOCK;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;

    this.isEditMode = this.id ? true : false;

    this.createForm();

    if (this.isEditMode) {
      this.getInfo();
    }
  }

  onSubmit() {}

  createForm() {
    this.form = this.formBuilder.group({
      id: [{ value: null, disabled: true }, Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  getInfo() {
    const prodSelecionado = PRODUCTS_SOLD_MOCK.find(
      (item) => item.id === this.id
    );

    this.form.patchValue({
      id: prodSelecionado?.id,
      name: prodSelecionado?.name,
      category: prodSelecionado?.category,
      quantity: prodSelecionado?.quantity,
      price: prodSelecionado?.price,
    });
  }

  saveProd(form: any): void {
    alert('Produto salvo com sucesso!');
    this.router.navigate(['/cadastros/produtos']);
  }
}

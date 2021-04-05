import { PRODUCTS_SOLD_MOCK, CATEGORY_MOCK } from '@app/mocks';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './products-create-edit.component.html',
  styleUrls: ['./products-create-edit.component.scss']
})
export class ProductsCreateEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  isEditMode: boolean;
  categoryList = CATEGORY_MOCK;
  productsList = PRODUCTS_SOLD_MOCK;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.isEditMode = this.id ? true : false;

    this.createForm();

    if (this.isEditMode) {
      this.getInfo();
    }
  }

  onSubmit() {}

  createForm() {
    this.productForm = this.formBuilder.group({
      id: [{ value: null, disabled: true }, Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  getInfo() {
    const produtoSelecionado = PRODUCTS_SOLD_MOCK.find((item) => item.id === this.id);

    this.productForm.patchValue({
      id: produtoSelecionado?.id,
      name: produtoSelecionado?.name,
      category: produtoSelecionado?.category,
      quantity: produtoSelecionado?.quantity,
      price: produtoSelecionado?.price
    });
    //console.log(productForm)
  }

  saveProd(form: any): void {
    alert('Produto salvo com sucesso!');
    this.router.navigate(['/cadastros/produtos']);
    //});
  }
}


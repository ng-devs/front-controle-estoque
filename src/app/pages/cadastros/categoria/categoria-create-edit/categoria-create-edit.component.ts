import { CATEGORY_MOCK } from '@app/mocks';
import { Component, createPlatform, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './categoria-create-edit.component.html',
  styleUrls: ['./categoria-create-edit.component.scss']
})
export class CategoriaCreateEditComponent implements OnInit {

  form: FormGroup
  id: number;
  isEditMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params["id"]

    this.isEditMode = this.id ? true : false

    this.createForm();

    if(this.isEditMode ){
       this.getInfo();
    }
}

  onSubmit(){

  }

  createForm(){
    this.form = this.formBuilder.group({
      id: [{ value: null, disabled: true }, Validators.required],
      name: ['', Validators.required],
    });
  }

  getInfo(){
    const categoriaSelecionada = CATEGORY_MOCK.find(item => item.id === this.id)

    this.form.patchValue({
      id : categoriaSelecionada?.id,
      name : categoriaSelecionada?.name
     })
  }

  saveCat(form: any): void {
      alert("Categoria salva com sucesso!")
      this.router.navigate(['/cadastros/categoria']);
    //});
  }

}



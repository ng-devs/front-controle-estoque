import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CategoriaComponent,
  CategoriaCreateEditComponent,
  CategoriaListComponent,
  DashBoardComponent,
  PaymentMethodComponent,
  PaymentMethodCreateEditComponent,
  PaymentMethodListComponent,
  ProductsComponent,
  ProductsCreateEditComponent,
  ProductsListComponent,
  SalesComponent,
  SalesCreateEditComponent,
  SalesListComponent,
} from '@app/pages';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  {
    path: 'cadastros/categoria',
    component: CategoriaComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CategoriaListComponent },
      { path: 'add', component: CategoriaCreateEditComponent },
      { path: 'edit/:id', component: CategoriaCreateEditComponent },
    ],
  },
  {
    path: 'cadastros/produtos',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductsListComponent },
      { path: 'add', component: ProductsCreateEditComponent },
      { path: 'edit/:id', component: ProductsCreateEditComponent },
    ],
  },
  {
    path: 'vendas',
    component: SalesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SalesListComponent },
      { path: 'create-edit', component: SalesCreateEditComponent },
    ],
  },
  {
    path: 'cadastros/formas-pagamento',
    component: PaymentMethodComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PaymentMethodListComponent },
      { path: 'create-edit', component: PaymentMethodCreateEditComponent },
      { path: 'create-edit/:id', component: PaymentMethodCreateEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

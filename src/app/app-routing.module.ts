import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CategoriaComponent,
  CategoriaCreateEditComponent,
  CategoriaListComponent,
  DashBoardComponent,
  FormaPagamentoComponent,
  FormaPagamentoCreateEditComponent,
  FormaPagamentoListComponent,
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
      { path: 'create-edit', component: CategoriaCreateEditComponent },
    ],
  },
  {
    path: 'cadastros/produtos',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductsListComponent },
      { path: 'create-edit', component: ProductsCreateEditComponent },
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
    component: FormaPagamentoComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: FormaPagamentoListComponent },
      { path: 'create-edit', component: FormaPagamentoCreateEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

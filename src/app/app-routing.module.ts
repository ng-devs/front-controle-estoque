import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from 'src/app/pages/cadastros/sales/sales.component';
import { ReadCategoriaComponent } from './pages/cadastros/categoria/read-categoria/read-categoria.component';
import { ProductsComponent } from './pages/cadastros/products/products.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'cadastros/produtos', component: ProductsComponent },
  { path: 'cadastros/categoria', component: ReadCategoriaComponent },
  { path: 'vendas', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

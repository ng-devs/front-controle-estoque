
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from 'src/app/pages/cadastros/sales/sales.component';
import { ProductsComponent } from './pages/cadastros/products/products.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ReadCategoriaComponent } from './pages/cadastros/categoria/read-categoria/read-categoria.component';
import { CrudCategoriaComponent } from './pages/cadastros/categoria/crud-categoria/crud-categoria.component';
import { CreateCategoriaComponent } from './pages/cadastros/categoria/create-categoria/create-categoria.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'cadastros/produtos', component: ProductsComponent },
  { path: 'cadastros/categoria', component: CrudCategoriaComponent,

    children: [
      {
        path: '', component: ReadCategoriaComponent,
      },
      {
        path: 'create', component: CreateCategoriaComponent,
      }

    ],
  },
  { path: 'vendas', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

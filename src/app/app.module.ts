import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AddButtonComponent,
  BreadCrumbComponent,
  CardComponent,
  CustomMatTableComponent,
  GenericListComponent,
  GridComponent,
  HeaderComponent,
  ModalComponent,
} from '@app/components';
import {
  DashBoardComponent,
  FormaPagamentoComponent,
  FormaPagamentoCreateEditComponent,
  FormaPagamentoListComponent,
  ProductsCreateEditComponent,
  ProductsListComponent,
  SalesComponent,
  SalesCreateEditComponent,
  SalesListComponent,
} from '@app/pages';
import { ProductsComponent } from 'app/pages/cadastros/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaCreateEditComponent } from './pages/cadastros/categoria/categoria-create-edit/categoria-create-edit.component';
import { CategoriaListComponent } from './pages/cadastros/categoria/categoria-list/categoria-list.component';
import { CategoriaComponent } from './pages/cadastros/categoria/categoria.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    ModalComponent,
    GridComponent,
    CardComponent,
    HeaderComponent,
    AddButtonComponent,
    CustomMatTableComponent,
    GenericListComponent,
    DashBoardComponent,
    ProductsComponent,
    ProductsCreateEditComponent,
    ProductsListComponent,
    SalesComponent,
    SalesListComponent,
    SalesCreateEditComponent,
    FormaPagamentoComponent,
    FormaPagamentoListComponent,
    FormaPagamentoCreateEditComponent,
    CategoriaComponent,
    CategoriaListComponent,
    CategoriaCreateEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSortModule,
    MatDialogModule,
  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

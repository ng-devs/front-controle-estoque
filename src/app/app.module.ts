import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AddButtonComponent,
  BreadCrumbComponent,
  CardComponent,
  GenericListComponent,
  GridComponent,
  HeaderComponent,
  ModalComponent,
} from '@app/components';
import {
  DashBoardComponent,
  PaymentMethodComponent,
  PaymentMethodCreateEditComponent,
  PaymentMethodListComponent,
  ProductsCreateEditComponent,
  ProductsListComponent,
  SalesComponent,
  SalesCreateEditComponent,
  SalesListComponent,
} from '@app/pages';
import { ProductsComponent } from 'app/pages/cadastros/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericBaseFormFieldComponent } from './components/generic-base-form-field/generic-base-form-field.component';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { GenericSelectComponent } from './components/generic-select/generic-select.component';
import { ShowValidationDirective } from './directives/show-validation.directive';
import { CategoriaCreateEditComponent } from './pages/cadastros/categoria/categoria-create-edit/categoria-create-edit.component';
import { CategoriaListComponent } from './pages/cadastros/categoria/categoria-list/categoria-list.component';
import { CategoriaComponent } from './pages/cadastros/categoria/categoria.component';
import { GenericPipe } from './pipes/generic.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { AlertComponent } from './components/alert/alert.component';
registerLocaleData(localePt);

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    ModalComponent,
    GridComponent,
    CardComponent,
    HeaderComponent,
    AddButtonComponent,
    GenericListComponent,
    DashBoardComponent,
    ProductsComponent,
    ProductsCreateEditComponent,
    ProductsListComponent,
    SalesComponent,
    SalesListComponent,
    SalesCreateEditComponent,
    PaymentMethodComponent,
    PaymentMethodListComponent,
    PaymentMethodCreateEditComponent,
    CategoriaComponent,
    CategoriaListComponent,
    CategoriaCreateEditComponent,
    ShowValidationDirective,
    GenericInputComponent,
    GenericBaseFormFieldComponent,
    GenericSelectComponent,
    GenericPipe,
    AlertComponent,
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
    MatDatepickerModule,
    MatSortModule,
    MatDialogModule,
    MatNativeDateModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)

  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    {
      provide: 'date',
      useClass: DatePipe,
    },
    {
      provide: 'currency',
      useClass: CurrencyPipe,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

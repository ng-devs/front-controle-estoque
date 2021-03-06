import { ReadCategoriaComponent } from './pages/cadastros/categoria/read-categoria/read-categoria.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import  localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { HeaderCategoriaComponent } from './pages/cadastros/categoria/header-categoria/header-categoria.component';
import { CardComponent } from './components/card/card.component';
import { CustomMatTableComponent } from './components/custom-mat-table/custom-mat-table.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ProductsComponent } from './pages/cadastros/products/products.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ModalComponent } from './components/modal/modal.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ReadCategoriaComponent,
    HeaderCategoriaComponent,
    CardComponent,
    HeaderComponent,
    GridComponent,
    ProductsComponent,
    AddButtonComponent,
    CustomMatTableComponent,
    ModalComponent,
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

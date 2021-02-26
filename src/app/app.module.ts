import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { CreateCategoriaComponent } from './pages/cadastros/categoria/create-categoria/create-categoria.component';
import { EditCategoriaComponent } from './pages/cadastros/categoria/edit-categoria/edit-categoria.component';
import { DeleteCategoriaComponent } from './pages/cadastros/categoria/delete-categoria/delete-categoria.component';
import { CrudCategoriaComponent } from './pages/cadastros/categoria/crud-categoria/crud-categoria.component';
import { ReadCategoriaComponent } from './pages/cadastros/categoria/read-categoria/read-categoria.component';
import { HeaderCategoriaComponent } from './pages/cadastros/categoria/header-categoria/header-categoria.component';

@NgModule({
  declarations: [AppComponent, DashBoardComponent, CardComponent, HeaderComponent, CreateCategoriaComponent, EditCategoriaComponent, DeleteCategoriaComponent, CrudCategoriaComponent, ReadCategoriaComponent, HeaderCategoriaComponent],
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
    MatFormFieldModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component,  OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { CustomDataSource, Filter, Pagination, ProdutoFilterProps, ProdutoListItem } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {}

  filtro: FormGroup;
  dataSource: CustomDataSource<ProdutoListItem, ProdutoFilterProps>;
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'quantidade', 'actions'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new CustomDataSource<ProdutoListItem, ProdutoFilterProps>(
      (filtro: Filter<ProdutoFilterProps>) => this.produtoService.buscarLista(filtro)
    );

    this.filtro = new FormGroup({
      id: new FormControl('', [Validators.pattern(/\d{1,}/g)]),
      nome: new FormControl('')
    });
  }

  buscar() {
    this.dataSource
      .loadData({
        pageNumber: 1,
        pageSize: this.paginator.pageSize,
        sortOrder: 'asc',
        ...this.filtro.value,
      })
      .subscribe((pagination: Pagination) => {
        this.paginator.length = pagination.totalCount;
        this.paginator.firstPage();
      });
  }

  //open dialog novo produto
  novo() {}

  //open dialog edit produto
  editar(id: number) {}

  //open dialog delete produto
  excluir(produto: any) {}
}

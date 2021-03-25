import { CollectionViewer } from "@angular/cdk/collections";
import { DataSource } from "@angular/cdk/table";
import { HttpParams, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

export interface ProdutoFilterProps {
  produtoServicoID?: string;
  nome?: string;
}

export interface ProdutoListItem {
  id: number;
  nome: string;
  categoria: string;
  quantidade: number;
}

export type ModelProps<T> = {
  [k in keyof T]: T[k];
};

export interface PaginatorProps {
  pageNumber: number;
  pageSize: number;
  sortOrder?: string;
}

export type Filter<T> = ModelProps<T> & PaginatorProps & HttpParams;

export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export class CustomDataSource<T, TFilter> implements DataSource<T> {
  private sourceSubject = new BehaviorSubject<T[]>([]);
  private loadingData = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingData.asObservable();

  constructor(private loadCallback: (filter: Filter<TFilter>) => Observable<HttpResponse<T[]>>) {}

  loadData(filter: Filter<TFilter>) {
    return new Observable<Pagination>((publisher) => {
      this.loadingData.next(true);

      this.loadCallback(filter)
        .pipe(finalize(() => this.loadingData.next(false)))
        .subscribe((response: HttpResponse<T[]>) => {
          const pagination = JSON.parse(response.headers.get('x-pagination') as string) as Pagination;
          publisher.next(pagination);
          this.loadingData.next(false);
          return this.sourceSubject.next(response.body as T[]);
        });
    });
  }

  connect(_: CollectionViewer): Observable<T[] | readonly T[]> {
    return this.sourceSubject.asObservable();
  }
  disconnect(_: CollectionViewer): void {
    this.sourceSubject.complete();
    this.loadingData.complete();
  }
}

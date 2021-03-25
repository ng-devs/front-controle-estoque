import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUTOS_MAIS_VENDIDOS } from '@app/mocks';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filter, ProdutoFilterProps, ProdutoListItem } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  buscarLista(): Observable<HttpResponse<ProdutoListItem[]>> {
    return of(
      new HttpResponse<ProdutoListItem[]>({
        body: PRODUTOS_MAIS_VENDIDOS.sort((a,b)=> b.quantidade - a.quantidade),
      }).clone({
        headers: new HttpHeaders().set(
          'x-pagination',
          '{"currentPage":1,"totalPages":1,"pageSize":10,"totalCount":1,"hasPrevious":false,"hasNext":false}'
        ),
      })
    );
  }
}

//Código que será utilizada para chamada HTTP
//   return this.http
//     .get<ProdutoListItem[]>(`${environment.url}/produtos`, {
//       observe: 'response',
//       responseType: 'json',
//       //para json server, será necessário ajustar as propriedades
//       //params: filtro
//     })
//     .pipe(
//       //map foi adicionado para paginação fake funcionar
//       map((c) => {
//         const clone = c.clone({
//           headers: new HttpHeaders().set(
//             'x-pagination',
//             '{"currentPage":1,"totalPages":1,"pageSize":10,"totalCount":1,"hasPrevious":false,"hasNext":false}'
//           ),
//         });
//         return clone;
//       })
//     );
// }
//}

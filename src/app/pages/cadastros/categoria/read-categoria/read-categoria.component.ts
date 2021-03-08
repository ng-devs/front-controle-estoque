import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/categoria';
import Swal from 'sweetalert2';

export interface ProductListItem {
  position: number;
  name: string;
}

const ELEMENT_DATA: Product[] = [
  { position: 1, name: 'Papelaria' },
  { position: 2, name: 'Maquiagem' },
  { position: 3, name: 'Utilidades' },
];

@Component({
  selector: 'app-read-categoria',
  templateUrl: './read-categoria.component.html',
  styleUrls: ['./read-categoria.component.scss'],
})
export class ReadCategoriaComponent implements OnInit {
  displayedColumns = ['position', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  add() {
    alert('adding test');
  }

  edit(item: ProductListItem) {
    alert(`Voce editou o produto ${item.position} - ${item.name}`);
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Excluir Categoria ',
      text: 'Deseja realmente excluir a categoria ?',
      showCancelButton: true,
      confirmButtonColor: '#7749F8',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Fechar',
    });
  }
}

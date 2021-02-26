import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/categoria';
import Swal from 'sweetalert2';


const ELEMENT_DATA: Product[] = [
  {position: 1, name: 'Papelaria'},
  {position: 2, name: 'Maquiagem'},
  {position: 3, name: 'Utilidades'}
];

@Component({
  selector: 'app-read-categoria',
  templateUrl: './read-categoria.component.html',
  styleUrls: ['./read-categoria.component.scss']
})
export class ReadCategoriaComponent implements OnInit {

  displayedColumns = ['position', 'name', 'action'];
  dataSource = ELEMENT_DATA;

    constructor(private route: Router) { }

  ngOnInit(): void {

  }

  alertConfirmation(){
    Swal.fire({
      title: 'Excluir Categoria x',
      text: 'Deseja realmente excluir a categoria x?',
      showCancelButton: true,
      confirmButtonColor: '#7749F8',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Fechar'
    })

    /*.then((result) => {
      if (result.value) {
        Swal.fire(
          'Excluída!',
          'Product removed successfully.',
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Retornando a lista de Categorias)',
        )
      }
    }) */
  }
}



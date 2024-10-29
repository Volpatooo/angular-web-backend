import { Component } from '@angular/core';
import { Categoria } from '../../../../../models/categoria';
import { CategoriaService } from '../../../../../services/categoria.service';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-filtro-categoria',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule],
  templateUrl: './filtro-categoria.component.html',
  styleUrl: './filtro-categoria.component.css'
})
export class FiltroCategoriaComponent {
  categoriasDisponiveis!: Categoria[]; // ! motra que pode ou não estar peenchida
  categoria!: Categoria;

  constructor(private categoriaservice: CategoriaService){
   this.categoriaservice.obterTodas().subscribe({
      next: (categorias) =>this.categoriasDisponiveis = categorias,
      error: (erro) => {
        alert("Ocorreu um erro ao carrgear as categorias")
        console.error(erro)
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Plataforma } from '../../../../../models/plataforma';
import { PlataformaService } from '../../../../../services/plataforma.service';




@Component({
  selector: 'app-filtro-plataforma',
  standalone: true,
  imports: [MultiSelectModule,
  FormsModule,],
  templateUrl: './filtro-plataforma.component.html',
  styleUrl: './filtro-plataforma.component.css'
})
export class FiltroPlataformaComponent {
  plataformasDisponiveis!: Plataforma[]; // ! motra que pode ou não estar peenchida
  plataformas: Plataforma[];

  constructor(private plataformaService: PlataformaService){
   this.plataformaService.obterTodas().subscribe({
      next: (plataformas) =>this.plataformasDisponiveis = plataformas,
      error: (erro) => {
        alert("Ocorreu um erro ao carrgear as plataformas")
        console.error(erro)
      }
    });

    this.plataformas = []
  }
}

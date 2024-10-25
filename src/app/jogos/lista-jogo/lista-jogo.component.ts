import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';

interface JogoLista {
  id: number,
  foto: string,
  nome: string,
  preco: number,
  categoria: string,
}

@Component({
  selector: 'app-lista-jogo',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ImageModule],
  templateUrl: './lista-jogo.component.html',
  styleUrl: './lista-jogo.component.css'
})
export class ListaJogoComponent {
  jogos!: JogoLista[];

  constructor(private router: Router){} // define o Router

  ngOnInit(){
    this.jogos =  [
      {
        id: 1,
        nome: "Fortinite",
        foto: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
        preco: 0,
        categoria: "FPS"
      }
    ]
  }

  acessarCadastro(){
    this.router.navigate(["/jogos/cadastro"]) // navega pela path jogos/cadastro
  }
}

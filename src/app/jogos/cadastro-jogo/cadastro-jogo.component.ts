import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-jogo',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-jogo.component.html',
  styleUrl: './cadastro-jogo.component.css'
})
export class CadastroJogoComponent {
 nome: string = "";
 preco!: number;
 desenvolvedora: string = "";
dataLancamento!: Date;
classificacao: number = 0;
tags!: string[];
categoria: string = "";
imagem: string = "";
descricao: string = "";
plataforma!: string[];
disponivelVenda: boolean = false

}

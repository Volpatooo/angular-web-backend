import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor() { }

  obterTodas(): Observable<Plataforma[]>{ // vai retornar uma lista de plataformas e uma lista porcausa do []
    let plataformas = [
      {nome: "Mobile"},
      {nome: "Nintendo"},
      {nome: "Pc"},
      {nome: "PlayStation"},
      {nome: "Xbox"},
    ]
    plataformas.sort((a, b) => a.nome.localeCompare(b.nome)); // usado para motrar em ordem alfabetica
    return of(plataformas);
  } 
}

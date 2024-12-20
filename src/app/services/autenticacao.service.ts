import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface LoginResponse {
  acess: string
  refresh: string
}

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) {}

  autenticar(login: string, senha: string) : Observable<any> {
    return this.httpClient.post<LoginResponse>(`${apiUrl}/login/`, {username: login, password: senha});
  }

  salvarToken(acess: string, refresh: string){
    localStorage.setItem("access", acess);
    localStorage.setItem("refresh", refresh)
  }

  isAuthenticated(): boolean{
    const token = localStorage.getItem("access");
    return !!token;
  }
  getToken(): string | null {
    return localStorage.getItem("access");
  }   
}

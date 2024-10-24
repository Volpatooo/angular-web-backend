import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,
     FormsModule,
      ButtonModule,
       ToastModule,
      RippleModule,
    PasswordModule,
  PanelModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = ""; // encma de value que agora e login eu coloco o mouse encima e aperto f2 e muda em todos os lugares que precisa
  senha: string = "";
  constructor(
    // Necesario para poder apresentar mensagem de feedback para o usuario
    private messageService: MessageService,
    // necessario para poder redirecionar para outra rota
    private router: Router,
  ) {}

  enviar(){
    if (this.login == "." && this.senha == ",") {
      this.router.navigate(["/home"]) // quando completarmos a senha vai ser redirecionado para o home
    } else {

     this.messageService.add({ severity: 'error', summary: 'Erro 404#', detail: 'Login ou senha invalidos!' }); // o value e oq definimos no html do component no input
    }

    // alert("Helo World: " + this.value)
  }

  redirecionarCadastrar(){
    this.router.navigate(["/cadastrar"])
  }
}

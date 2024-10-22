import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [InputTextModule,
     FormsModule,
      ButtonModule,
       ToastModule,
      RippleModule,
    PasswordModule],
  providers: [MessageService],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent {
  login: string = ""; // encma de value que agora e login eu coloco o mouse encima e aperto f2 e muda em todos os lugares que precisa
  senha: string = "";
  constructor(private messageService: MessageService) {}

  enviar(){
    if (this.login == "admin" && this.senha == "batatinha") {
      
    } else {

     this.messageService.add({ severity: 'error', summary: 'Erro 404#', detail: 'Login ou senha invalidos!' }); // o value e oq definimos no html do component no input
    }

    // alert("Helo World: " + this.value)
  }
}

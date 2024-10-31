import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CategoriaService } from '../../services/categoria.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

interface Categoria {
  id: number,
  nome: string
}

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, FormsModule, ToastModule, ConfirmDialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {
  nome: string = "";
  categorias!: Categoria[];
  modalApresentada: boolean = false;
  idParaEditar!: number | undefined

  constructor(private categoriaService: CategoriaService,
     private messageService: MessageService,
     private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.carregarCategorias();
  }

  private carregarCategorias() {
    this.categoriaService.obterTodas().subscribe({
      next: categorias => this.categorias = categorias,
      error: erro => {
        alert("Não foi possivel carregar a lista de categorias");
      }
    });
  }

  abrirModal() {
    this.modalApresentada = true;
  }

  salvar() {
    if (!this.idParaEditar)
      this.cadastrar();
    else
      this.editar();
  }

  private cadastrar() {
    this.categoriaService.cadastrar(this.nome).subscribe({
      next: () => {
        this.apresentarMensagemSucesso("Cadastrado com Sucesso");
        this.modalApresentada = false;
        this.nome = "";
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        alert("Erro ao cadastrar");
      }
    });
  }

  private editar() {
    this.categoriaService.editar(this.idParaEditar!, this.nome).subscribe({
      next: () => {
        this.apresentarMensagemSucesso("Editado com Sucesso");
        this.modalApresentada = false;
        this.nome = "";
        this.idParaEditar = undefined
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        alert("Erro ao Editar Categoria");
      }
    });
  }

  confirmacaoExclusao(event: Event, categoria: Categoria) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: `Deseja Realmente apagar a Categoria ${categoria.nome}?`,
        header: 'Confirmação de Exclusão',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"Sim",
        rejectIcon:"none",

        accept: () => {
            this.apagar(categoria.id);
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

  apagar(id: number) {
    this.categoriaService.apagar(id).subscribe({
      next: () => {
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro)
        this.apresentarMensagemErro("Erro ao Cadastrar")
      }
    })
  }

  apresentarMensagemSucesso(mensagem: string) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: mensagem });
  }

  apresentarMensagemErro(mensagem: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro 404', detail: mensagem });
  }

  carregarModalParaEvitar(id: number){
    this.categoriaService.obterPorId(id).subscribe({
      next: categoria => {
        this.nome = categoria.nome
        this.abrirModal()
        this.idParaEditar = id
      },
      error: erro => {
        console.error(erro)
        this.apresentarMensagemErro("Não foi possivel carregar a categoria para Editar")
      }
    })
  }
}

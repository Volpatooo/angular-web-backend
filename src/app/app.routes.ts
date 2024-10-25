import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListaJogoComponent } from './jogos/lista-jogo/lista-jogo.component';
import { CadastroJogoComponent } from './jogos/cadastro-jogo/cadastro-jogo.component';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "home", component: HomeComponent}, // cria  a rota home que vi acessar o component home
    {path: "login", component: LoginComponent}, // cria a rota de login que vai acessar o componente login
    {path: "categorias", component: ListaCategoriaComponent},
    {path: "cadastrar", component: CadastroUsuarioComponent},
    {path: "jogos", component: ListaJogoComponent},
    {path: "jogos/cadastro", component: CadastroJogoComponent}, // quando acessamos jgos e apertamos em cadastrar vai para a tela de cadastro por isso chamamos o component CadastroJogoComponent
    {path: "**", redirectTo: "/login"}, // Redireciona qualquer rota nao existente redirecionara para o login
];

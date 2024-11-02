export interface JogoForm {
    nome: string;
    preco?: number; // ? indica que pod eestra vazio ou nao
    desenvolvedora: string;
    dataLancamento?: Date;
    classificacao: number;
    tags: string[];
    categoria?: number;
    imagem?: File;
    descricao?: string;
    plataforma: string[];
    disponivelVenda: boolean;
}
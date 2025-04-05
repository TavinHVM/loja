import { Precificavel } from "./precificavel";
import Especificacoes from "./especificacoes";
export default interface Produto extends Precificavel {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  videoReview: string;
  nota: number;
  tags: string[];
  preco: number;
  especificacoes: Especificacoes;
}

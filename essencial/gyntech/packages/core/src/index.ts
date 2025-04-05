export * from "./produto";
export * from "./constants";
// Removed invalid import as 'Produto' is already defined in this file

export interface Produto {
  id: number;
  nome: string;
  precoBase: number;
  precoPromocional: number;
  imagem: string;
  especificacoes: {
    destaque: string;
  };
}

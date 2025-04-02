import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos.map((produto) => ({
      ...produto,
      especificacoes: { destaque: produto.especificacoes.destaque },
    }));
  }
 @Get(':id')
async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
  const produtoId = Number(id); // Converte o id para número
  const produto = produtos.find((produto) => produto.id === produtoId);
  return produto ?? null;
}



}
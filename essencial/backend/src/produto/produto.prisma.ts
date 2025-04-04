import { Injectable } from '@nestjs/common';
import { Produto } from 'src/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(produto: Partial<Produto>): Promise<void> {
    await this.prisma.produto.upsert({
      where: { id: produto.id || 0 }, // Use 0 como fallback para evitar erro
      update: {
        nome: produto.nome ?? '',
        descricao: produto.descricao ?? '',
        marca: produto.marca ?? '',
        modelo: produto.modelo,
        imagem: produto.imagem,
        videoReview: produto.videoReview,
        nota: produto.nota,
        tags: produto.tags,
        especificacoes: produto.especificacoes,
        precoBase: produto.precoBase,
        precoPromocional: produto.precoPromocional,
        menorPreco: produto.menorPreco,
        maiorPreco: produto.maiorPreco,
        precoMedio: produto.precoMedio,
      },
      create: {
        nome: produto.nome ?? '',
        descricao: produto.descricao ?? '',
        marca: produto.marca ?? '',
        modelo: produto.modelo ?? '',
        imagem: produto.imagem ?? '',
        videoReview: produto.videoReview ?? '',
        nota: produto.nota ?? 0,
        tags: produto.tags,
        especificacoes: produto.especificacoes ?? '',
        precoBase: produto.precoBase ?? 0,
        precoPromocional: produto.precoPromocional ?? 0,
        menorPreco: produto.menorPreco ?? 0,
        maiorPreco: produto.maiorPreco ?? 0,
        precoMedio: produto.precoMedio ?? 0,
      },
    });
  }

  async obter(): Promise<Produto[]> {
    return this.prisma.produto.findMany() as any;
  }

  async obterPorId(id: number): Promise<Produto | null> {
    const produto = (await this.prisma.produto.findUnique({
      where: { id },
    })) as any;
    return (produto as any) ?? null;
  }

  async excluir(id: number): Promise<void> {
    await this.prisma.produto.delete({ where: { id } });
  }
}

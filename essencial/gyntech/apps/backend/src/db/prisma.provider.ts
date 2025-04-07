import {
  Global,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { Produto } from '@gyntech/core';

@Global()
@Injectable()
export class PrismaProvider
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    this.$connect();
  }

  async create(produto: Produto): Promise<void> {
    await this.produto.create({
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        marca: produto.marca,
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
    });
  }

  async salvar(produto: Produto): Promise<void> {
    await this.produto.upsert({
      where: { id: produto.id || 0 },
      update: {
        ...produto,
        especificacoes: JSON.stringify(produto.especificacoes),
      },
      create: {
        ...produto,
        especificacoes: JSON.stringify(produto.especificacoes),
      },
    });
  }

  onModuleDestroy() {
    this.$disconnect();
  }
}

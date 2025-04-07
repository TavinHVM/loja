import { PrismaClient } from '@prisma/client';
import { produtos } from '@gyntech/core';

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('Inserindo produtos...');

    await prisma.produto.createMany({
      data: produtos.map((produto) => ({
        ...produto,
        especificacoes: JSON.stringify(produto.especificacoes), // Serializa o campo especificacoes
      })),
    });

    console.log('Seed executado com sucesso!');
  } catch (error) {
    console.error('Erro ao rodar o seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();

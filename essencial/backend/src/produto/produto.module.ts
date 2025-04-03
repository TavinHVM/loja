import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoPrisma } from './produto.prisma';

@Module({
    
    controllers: [ProdutoController],
    
    providers: [ProdutoPrisma],
    
  })
  export class ProdutoModule {}({})


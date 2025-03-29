import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import{ Produto, produtos} from 'src/core';
@Controller('produtos')
export class ProdutoController {
    @Get()
 obterProdutos(): Produto[] {
    return produtos;

} 
}

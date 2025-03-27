import { Produto } from "@/core"

export interface ProdutoItemProps{
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    return <div>{props.produto.nome}</div>
}
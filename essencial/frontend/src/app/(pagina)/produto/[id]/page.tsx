'use client'
import { Produto, produtos } from '@/core'
import useProdutos from '@/data/hooks/useProdutos'
import { use, useEffect, useState } from 'react'

export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produtos, setProdutos] = useState<Produto| null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProdutos)
    }, {props.params.id}) 




    const id = +props.params.id
    const produto = produtos.find((p) => p.id === id)
    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}
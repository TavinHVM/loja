'use client'
import { Produto } from '@gyntech/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PaginaProduto() {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    const params = useParams<{ id: string }>();
    useEffect(() => {
        obterProdutoPorId(Number(params.id)).then(setProduto)
    }, [params.id])


    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}
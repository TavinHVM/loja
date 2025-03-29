'use client'
import { Produto, produtos } from "@/core";
import { use, useEffect, useState } from "react";

export default function useProdutos(){
    const[produtos, setProdutos] = useState<Produto[]>([]);

    async function obterProdutos(): Promise<Produto[]> {
        const response = await fetch('http://localhost:4000/produtos')
        const produtos = await response.json()
        return produtos ?? []
    }

    useEffect(() => {
        obterProdutos().then(setProdutos)
    }, [])
    
    return{
        produtos,
    }
}
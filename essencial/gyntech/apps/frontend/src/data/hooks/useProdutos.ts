"use client";
import { Produto, produtos } from "@gyntech/core";
import { use, useEffect, useState } from "react";

const url = "http://localhost:4000";

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function obterProdutos(): Promise<Produto[]> {
    const response = await fetch(`${url}/produtos`);
    const produtos = await response.json();
    return produtos ?? [];
  }

  async function obterProdutoPorId(id: number): Promise<Produto | null> {
    const response = await fetch(`${url}/produtos/${id}`);
    const produto = await response.json();
    return produto ?? null;
  }

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    obterProdutoPorId,
    produtos,
  };
}

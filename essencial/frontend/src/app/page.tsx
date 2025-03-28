import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex gap-5 flex-wrap">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
   </div>
  );
}

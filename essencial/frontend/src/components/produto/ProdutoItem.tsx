import { Produto } from "@/core";
import Link from "next/link";
import '../../app/globals.css';
import { IconShoppingCart } from "@tabler/icons-react";

export interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    return (
        <Link
            href={`/produto/${produto.id}`}
            className="flex flex-col text-with-light-background relative max-w-[250px]"
        >
            <div>
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    width={350}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-lg"
                />
            </div>
            <div className="flex-1 flex flex-col">
                <span className="text-lg font-semibold p-5 border-t">
                    {props.produto.nome}
                </span>
                <span className="text-sm border-b border-dashed self-start gap-3">
                    {props.produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span>
                        <span className="text-sm font-medium line-through">De: R${produto.precobase}</span><br></br>
                        <span className="text-lg font-bold col destaque">Por: R${produto.precopromocional}</span>
                    </span>
                </div>
                <button className="bg-green-600/70 text-white rounded-lg p-2 mt-2 gap-1 flex items-center justify-center hover:bg-green-600 transition duration-180 ease-in-out">
                    <IconShoppingCart size={20}/>
                    <span className="font-semibold">Adicionar ao carrinho</span>
                </button>
            </div>
        </Link>
    );
}
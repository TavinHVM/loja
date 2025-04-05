import { Produto } from "@gyntech/core";
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
                <span className="text-lg font-semibold p-5 border-t col bege">
                    {props.produto.nome}
                </span>
                <span className="text-sm border-b border-dashed self-start gap-3 text-amber-50">
                    {props.produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span>
                        <span className="text-sm font-medium line-through text-amber-50">De: R${produto.precoBase}</span><br></br>
                        <span className="text-lg font-bold col destaque text-amber-50">Por: R${produto.precoPromocional}</span>
                    </span>
                </div>
                <button className="bg-[#cfb001] text-white rounded-lg p-2 mt-2 gap-1 flex items-center justify-center hover:bg-[#ffdc6a] transition duration-120 ease-in-out">
                    <IconShoppingCart color="black"
                        size={20}
                        style={{
                            textShadow: "0px 0px 3px black",
                        }}
                    />
                    <span
                        className="font-semibold"
                        style={{
                            textShadow: "0px 0px 3px black",
                        }}
                    >
                        Adicionar ao carrinho
                    </span>
                </button>
            </div>
        </Link>
    );
}
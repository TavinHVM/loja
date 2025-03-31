import {IconShoppingCart} from "@tabler/icons-react";

export interface IconeCarrinhoProps {
    qtdItens: number;
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
    return (
        <div className="flex items-center justify-center w-10 h-10 bg-black-500 rounded-full relative">
            <IconShoppingCart size={30} stroke={1.3} color="#FFFF" />
            {props.qtdItens > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {props.qtdItens ?? 0}
                </div>
            )}
        </div>
    );
}
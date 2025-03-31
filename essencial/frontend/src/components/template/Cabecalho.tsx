import Logo from "../shared/Logo";
import IconeCarrinho from "../shared/IconeCarrinho";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <div
            className="flex flex-col h-20"
            style={{ background: "linear-gradient(90deg, #14002D, 100%)" }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Link href="">
                        <IconeCarrinho qtdItens={0} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
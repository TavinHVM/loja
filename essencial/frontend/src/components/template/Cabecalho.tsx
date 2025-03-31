import Logo from "../shared/Logo";
import IconeCarrinho from "../shared/IconeCarrinho";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <div
            className="flex flex-col h-16 top-0 left-0 w-full z-50"
            style={{
                background: "linear-gradient(90deg, #14002D, 100%)",
                margin: 0,
            }}
        >
            <div className="flex-1 container flex flex-col justify-center"
            style={{
                padding: "20px 20px 10px 20px", // Adicionado padding-bottom
                borderBottom: "1px solid rgba(255, 255, 255, 0.5)"
            }}>
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
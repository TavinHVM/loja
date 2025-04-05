import Logo from "../shared/Logo";
import IconeCarrinho from "../shared/IconeCarrinho";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <div
            className="flex flex-col h-16 top-0 left-0 w-full z-50"
            style={{
                background: "linear-gradient(to top, #000000, #141414)",
                margin: 0,
                width: "100vw",
                height: "120px",
            }}
        >
            <div
                className="flex-1 container flex flex-col justify-center"
                style={{
                    padding: "20px 20px 10px 20px",
                }}
            >
                <div className="flex justify-between items-center">
                    <Logo />
                    <Link href="">
                        <IconeCarrinho qtdItens={0} />
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800"></div>
        </div>
    );
}
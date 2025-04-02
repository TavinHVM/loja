import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col min-h-screen">
            <div
                className="flex-1 flex flex-col w-screen"
                style={{
                    backgroundImage: "url('/background.png')",
                    backgroundSize: "cover", // Faz a imagem cobrir toda a tela
                    backgroundRepeat: "no-repeat", // Evita repetição da imagem
                    backgroundPosition: "center", // Centraliza a imagem
                    backgroundAttachment: "fixed", // Fixa o background ao rolar a página
                }}
            >
                <div>
                    
                </div>
                
                <Cabecalho />
                <main className="pt-16">{props.children}</main>
                <Rodape />
            </div>
        </div>
    );
}
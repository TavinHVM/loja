import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";


export default function Pagina(props: any) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                background: 'radial-gradient(50% 50% at 50% 0%, #000000, #141414)',
            }}
        >

            <Cabecalho/>
            <main className="flex-1">{props.children}</main>
            <Rodape />
        </div>
    );
}
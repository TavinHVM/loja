import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    return (
        <div>
            <Cabecalho />
            <main className="pt-16">{props.children}</main>
            <Rodape />
        </div>
    );
}
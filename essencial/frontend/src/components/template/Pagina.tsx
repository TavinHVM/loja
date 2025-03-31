import Cabecalho from "./Cabecalho";

export default function Pagina(props: any) {
    return (
        <div>
            <Cabecalho />
            <main className="pt-16">{props.children}</main> {/* Ajustado para pt-16 */}
        </div>
    );
}
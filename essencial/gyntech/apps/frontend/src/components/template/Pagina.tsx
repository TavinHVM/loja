import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";



export interface PaginaProps {
 className?: string;
 children:any
}
export default function Pagina(props: any) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                background: 'radial-gradient(50% 50% at 50% 0%, #000000, #141414)',
            }}
        >
            <div
                className="flex-1 flex-col w-screen"
                style={{background:'url("/background.png") no-repeat center center fixed', backgroundSize: 'cover'}}
                
            >

            <Cabecalho/>
            <main className={`
            flex-1 flex-col py-10 ${props.className}''}
            `}>{props.children}</main>
            <Rodape />
            </div>
            
    
            
        </div>
    );
}
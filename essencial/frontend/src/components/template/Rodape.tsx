import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconMail, IconBrandWhatsapp } from "@tabler/icons-react";
import Logo2 from "../shared/Logo2";

export default function Rodape() {
    return (
        <footer
            className="flex flex-col text-zinc-300 mt-10"
            style={{
                background: "linear-gradient(to top, #282d36, #101214)", // Gradiente cinza
            }}
        >
            <div className="h-px bg-gradient-to-r from-gray-700 to bg-gray-500 via-gray-600/80 to-gray-600/20"></div>
            <div className="container flex flex-col py-10 gap-10"></div>
            <div
                className="flex flex-col md:flex-row items-start justify-between"
                style={{
                    padding: "0px 10px",
                    margin: "0px 45px",
                }}
            >
                {/* Logo e Redes Sociais */}
                <div className="flex flex-col items-start gap-4">
                    <div style={{ width: "130px", height: "auto" }}>
                        <Logo2 /> {/* Reduzido ainda mais o tamanho da logo */}
                    </div>
                    <div className="flex gap-2">
                        <IconBrandYoutube size={28} stroke={1} className="text-gray-400 hover:text-gray-400" />
                        <IconBrandInstagram size={28} stroke={1} className="text-gray-400 hover:text-gray-400" />
                        <IconBrandFacebook size={28} stroke={1} className="text-gray-400 hover:text-gray-400" />
                        <IconBrandLinkedin size={28} stroke={1} className="text-gray-400 hover:text-gray-400" />
                    </div>
                </div>

                {/* Sobre nós */}
                <div className="text-justify"> {/* Justificado o texto */}
                    <h3 className="text-lg font-semibold text-gray-300">Sobre nós</h3>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                                Nossa história
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                                Política de privacidade
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                                Termos de uso
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contato */}
                <div className="flex flex-col items-end">
                    <h3 className="text-lg font-semibold text-gray-300">Contato</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <IconBrandWhatsapp size={20} className="text-green-500" />
                        <a href="https://wa.me/5562995301725" target="_blank" className="text-sm text-gray-400 hover:text-gray-300">
                            WhatsApp
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <IconMail size={20} className="text-gray-500" />
                        <a href="mailto:gyntech@gmail.com" className="text-sm text-gray-400 hover:text-gray-300">
                        gyntech@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row items-center py-10 gap-10">
                <div className="flex flex-col md:flex-row items-end gap-2 ml-auto">
                    <p className="text-sm">Desenvolvido por</p>
                    <a
                        href="https://www.linkedin.com/in/gustavo-henrique-6b8352304/"
                        target="_blank"
                        className="text-sm text-blue-300 hover:text-blue-200"
                    >
                        Gustavo Henrique
                    </a>
                    <p className="text-sm">e</p>
                    <a
                        href="https://www.linkedin.com/in/gabrielliima1/"
                        target="_blank"
                        className="text-sm text-blue-300 hover:text-blue-200"
                    >
                        Gabriel Lima
                    </a>
                </div>
            </div>
        </footer>
    );
}
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconMail, IconBrandWhatsapp } from "@tabler/icons-react";
import Logo2 from "../shared/Logo2";

export default function Rodape() {
    return (
        <footer
            className="flex flex-col text-zinc-300 mt-10"
            style={{
                background: "linear-gradient(to top, #000000, #141414)", // Gradiente cinza
            }}
        >
            <div className="h-px bg-gradient-to-r from-neutral-800 to bg-neutral-500 via-neutral-500 to-neutral-800"></div>
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
                    <div style={{ width: "150px", height: "auto" }}>
                        <Logo2 />
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <IconBrandYoutube size={28} stroke={1} className="text-amber-50 hover:text-amber-100" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <IconBrandInstagram size={28} stroke={1} className="text-amber-50 hover:text-amber-100" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <IconBrandFacebook size={28} stroke={1} className="text-amber-50 hover:text-amber-100" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <IconBrandLinkedin size={28} stroke={1} className="text-amber-50 hover:text-amber-100" />
                        </a>
                    </div>
                </div>

                {/* Sobre nós */}
                <div className="text-justify"> {/* Justificado o texto */}
                    <h3 className="text-lg font-extrabold text-amber-50">Sobre nós</h3>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li>
                            <a href="#" className="text-sm text-amber-50 hover:text-amber-100">
                                Nossa história
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-amber-50 hover:text-amber-100">
                                Política de privacidade
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-amber-50 hover:text-amber-100">
                                Termos de uso
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contato */}
                <div className="flex flex-col items-end">
                    <h3 className="text-lg font-extrabold text-amber-50">Contato</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <IconBrandWhatsapp size={20} className=" text-amber-50 hover:text-amber-100" />
                        <a href="https://wa.me/5562995301725" target="_blank" className="text-sm text-amber-50 hover:text-amber-100">
                            WhatsApp
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <IconMail size={20} className="text-amber-50 hover:text-amber-100" />
                        <a href="mailto:gyntech@gmail.com" className="text-white-500text-sm text-amber-50 hover:text-amber-100">
                            gyntech@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row items-center py-10 gap-10 text-amber-50">
                <div className="flex flex-col md:flex-row items-end gap-2 ml-auto">
                    <p className="text-sm">Desenvolvido por</p>
                    <a
                        href="https://www.linkedin.com/in/gustavo-henrique-6b8352304/"
                        target="_blank"
                        className="text-sm text-amber-100 hover:text-orange-200"
                    >
                        Gustavo Henrique
                    </a>
                    <p className="text-sm">e</p>
                    <a
                        href="https://www.linkedin.com/in/gabrielliima1/"
                        target="_blank"
                        className="text-sm text-amber-100 hover:text-orange-200"
                    >
                        Gabriel Lima
                    </a>
                </div>
            </div>
        </footer>
    );
}
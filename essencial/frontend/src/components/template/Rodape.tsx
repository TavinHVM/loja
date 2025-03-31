import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

export default function Rodape() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            <div className="h-px bg-gradient-to-r from-gray-700 to bg-gray-500 via-gray-600/80 to-gray-600/20"></div>
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items"></div>
            </div>
            <div>
                <div>
                    <IconBrandYoutube size={28} stroke={1} className="text-red-600" />
                    <IconBrandInstagram size={28} stroke={1} className="text-pink-400" />
                    <IconBrandFacebook size={28} stroke={1} className="text-blue-600" />
                    <IconBrandLinkedin size={28} stroke={1} className="text-blue-400" />
                </div>
            </div>
        </footer>
    )
}
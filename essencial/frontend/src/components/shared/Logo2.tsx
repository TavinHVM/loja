import Image from "next/image";
import Link from "next/link";

export default function Logo2() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={230} height={0} alt="Logo"/>
        </Link>
    );
}
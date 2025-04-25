import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center w-full"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-4">
                <div className="space-y-6 text-white">
                    <div className="flex items-center space-x-6 mb-6">
                        <Link href='https://www.chevrolet.com.ar/'>
                            <Image
                                src="/images/chevrolet.png"
                                alt="Chevrolet"
                                width={95}
                                height={40}
                                className="object-scale-down"
                            />
                        </Link>

                        <div className="w-px h-10 bg-white" />

                        <Link href='https://www.toyota.com.ar/'>
                            <Image
                                src="/images/toyota3.png"
                                alt="Toyota"
                                width={70}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <h1 className="text-3xl md:text-5xl leading-snug">
                        Venta de repuestos,<br />
                        autopartes y accesorios<br />
                        para Toyota y Chevrolet
                    </h1>

                    <div className="flex items-center space-x-4  ">
                        <p className="p-2 border border-white rounded-full">
                            <FaRegStar className="w-6 h-6 text-white " />
                        </p>
                        <a
                            href="/contacto"
                            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 pl-8 pr-2 rounded-3xl transition"
                        >
                            <LiaLongArrowAltRightSolid className="w-8 h-8 text-white" />
                        </a>
                        <span className="text-white font-light">CONTACTATE CON NOSOTROS</span>
                    </div>
                </div>
                <div />
            </div>
        </section>
    );
}

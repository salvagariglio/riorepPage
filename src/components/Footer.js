"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12 md:grid-cols-4 ">
                <div className=" pb-4">
                    <Image
                        src="/images/logo.png"
                        alt="Riorep – Repuestos y accesorios"
                        width={200}
                        height={40}
                        className="object-contain"
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between mx-auto">
                    <div className="p-4">
                        <h3 className="font-bold uppercase mb-2 text-lg md:text-2xl">Ubicación</h3>
                        <p className="text-xl font-medium">Bv. Ameghino 1350,</p>
                        <p className="text-xl font-medium">Río Cuarto, Córdoba</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold uppercase mb-2 text-lg md:text-2xl">Horarios</h3>
                        <p className="text-xl font-medium">Lunes a viernes de 08:00 a 13:00 hs.</p>
                        <p className="text-xl font-medium">y de 15:00 a 19:00 hs.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold uppercase mb-2 text-lg md:text-2xl">Contacto</h3>
                        <p className="text-xl font-medium">+54 9 3584 01-1515</p>
                        <div className="flex mt-6 pt-10 space-x-4">
                            <a
                                href="https://www.facebook.com/riorepsas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0054A6] p-3 rounded-full text-white hover:bg-blue-950 transition"
                            >
                                <FaFacebookF size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com/riorepsas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0054A6] p-3 rounded-full text-white hover:bg-blue-950 transition"
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0054A6] p-3 rounded-full text-white hover:bg-blue-950 transition"
                            >
                                <FaLinkedinIn size={30} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-gray-950 text-gray-400 text-center py-10">
                © 2025 Copyright - RIOREP | por SG
            </div>
        </footer>
    );
}

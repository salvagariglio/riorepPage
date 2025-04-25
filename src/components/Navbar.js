"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "NOSOTROS", href: "/" },
        { label: "PRODUCTOS", href: "/productos" },
        { label: "HISTORIA", href: "/historia" },
        { label: "CONTACTO", href: "/contacto" },
    ];

    return (
        <nav className="bg-white shadow-md py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="Riorep – Repuestos y accesorios"
                        width={200}
                        height={40}
                        className="object-contain"
                    />
                </Link>
                <ul className="hidden md:flex flex-1 justify-center space-x-8 font-semibold">
                    {navItems.map(({ label, href }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative pb-1 transition-colors text-lg ${isActive
                                        ? "text-gray-900 after:absolute after:-bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
                                        : "text-gray-700 hover:text-gray-900"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="hidden md:flex flex-shrink-0 items-center space-x-4">
                    <a
                        href="https://wa.me/543584011515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-black p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaWhatsapp size={30} />
                    </a>
                    <a
                        href="wa.link/qobkad"
                        className="hidden lg:inline-block text-lg bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-3xl transition"
                    >
                        +54 9 3584 01-1515
                    </a>
                </div>
                <div className="flex md:hidden items-center space-x-2">
                    <a
                        href="https://wa.me/543584011515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-black p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center p-2"
                    >
                        {open ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {open && (
                <ul className="md:hidden bg-white shadow-inner px-4 pb-4 space-y-2">
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

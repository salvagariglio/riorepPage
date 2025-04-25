"use client";
import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactInfo() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="bg-gray-100 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y divide-gray-300 md:divide-x md:divide-y">
                    <div className="flex flex-col items-center text-center p-6">
                        <h3 className="text-2xl md:text-3xl  font-semibold mb-2">
                            Venta de repuestos y accesorios
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700">
                            Especializados en Chevrolet y Toyota
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center justify-center p-6">
                        <div className="flex gap-3 items-center justify-center">
                            <IoLocationOutline size={35} className=" mb-2" />
                            <h3 className="text-2xl md:text-3xl  font-semibold mb-1">Nuestra sede</h3>
                        </div>
                        <p className="text-lg md:text-xl text-gray-700">
                            Blvd. Ameghino 1350<br />Río Cuarto, Córdoba
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center p-6">
                        <div className="flex gap-3 items-center justify-center">
                            <FaWhatsapp size={35} className="mb-2" />
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1">WhatsApp</h3>
                        </div>
                        <p className="text-lg md:text-xl text-gray-700">+54 9 3584 01-1515</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 justify-center">
                        <div className="flex gap-3 items-center justify-center">
                            <MdEmail size={35} className="mb-2" />
                            <h3 className="text-2xl md:text-3xl  font-semibold mb-1">E-mail</h3>
                        </div>
                        <p className="text-lg md:text-xl text-gray-700">riorepsas@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
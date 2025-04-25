"use client";
import React from "react";

export default function ContactForm() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Envíanos tu mensaje</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                    Si tenés alguna duda o necesitás un presupuesto, completá los campos a
                    continuación y nos comunicaremos a la brevedad.
                </p>
            </div>

            <form
                action="https://getform.io/f/pamqklda"
                method="POST"
                encType="multipart/form-data"
                className="max-w-3xl mx-auto"
            >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <li className="flex flex-col">
                        <label htmlFor="nombre" className="font-medium mb-1 text-xl">
                            Nombre y apellido *
                        </label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            placeholder="Juan Perez"
                            className="w-full p-3 border rounded-lg border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </li>

                    <li className="flex flex-col">
                        <label htmlFor="telefono" className="font-medium mb-1 text-xl">
                            Teléfono *
                        </label>
                        <input
                            id="telefono"
                            name="telefono"
                            type="text"
                            required
                            placeholder="Ej: 3586231405"
                            className="w-full p-3 border rounded-lg border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </li>

                    <li className="col-span-1 md:col-span-2 flex flex-col">
                        <label htmlFor="email" className="font-medium mb-1 text-xl">
                            Email *
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="email@mail.com"
                            className="w-full p-3 border rounded-lg border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </li>

                    <li className="col-span-1 md:col-span-2 flex flex-col">
                        <label htmlFor="asunto" className="font-medium mb-1 text-xl">
                            Asunto *
                        </label>
                        <input
                            id="asunto"
                            name="asunto"
                            type="text"
                            required
                            placeholder="Objetivo de la consulta"
                            className="w-full p-3 border rounded-lg border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </li>

                    <li className="col-span-1 md:col-span-2 flex flex-col">
                        <label htmlFor="mensaje" className="font-medium mb-1 text-xl">
                            Consulta *
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows={6}
                            required
                            placeholder="Dejanos tu consulta"
                            className="w-full p-3 border rounded-lg border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </li>

                    <li className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 text-xl font-semibold bg-red-600 rounded-lg text-white hover:bg-red-700 transition"
                        >
                            Enviar Mensaje
                        </button>
                    </li>
                </ul>
            </form>
        </section>
    );
}

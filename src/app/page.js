"use client";

import Link from "next/link";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Hero from "@/components/Hero";
import Workers from "@/components/Workers";
import MainSlider from '@/components/MainSlider';
import SlideCard from '@/components/SlideCard';

export default function HomePage() {

  const productos = [
    {
      brand: "KAVACO",
      line1: "Aceite para caja",
      line2: "Automática y manual",
      subtitle: "",
      imageSrc: "/images/recortes/aceite-caja-velocidad-autom-manual.png"
    },
    {
      brand: "ACDELCO",
      line1: "Aceite de",
      line2: "Motor",
      subtitle: "",
      imageSrc: "/images/recortes/aceite-motor-acdelco.png"
    },
    {
      brand: "GM ORIGINAL",
      line1: "Kit distribución con bomba de agua y termostato",
      line2: "",
      subtitle: "AGILE | CORSA | COBALT | ONIX | MERIVA | PRISMA | SPIN",
      imageSrc: "/images/recortes/kit-distribucion-bomba-de-agua-termostato-original-agile-corsa-etc.png"
    },
    {
      brand: "TOYOTA ORIGINAL",
      line1: "Kit distribución original",
      line2: "Toyota Hilux",
      subtitle: "1KD / 2KD",
      imageSrc: "/images/recortes/kit-distribucion-original-toyota-hilux.png"
    },
    {
      brand: "TOYOTA",
      line1: "Kit distribución",
      line2: "Toyota Hilux",
      subtitle: "1KD / 2KD",
      imageSrc: "/images/recortes/kit-distribucion-toyota-hilux.png"
    },
    {
      brand: "GM",
      line1: "Kit distribución con bomba de agua y termostato",
      line2: "",
      subtitle: "AGILE | CORSA | COBALT | ONIX | MERIVA | PRISMA | SPIN",
      imageSrc: "/images/recortes/kit-distribucion-bomba-de-agua-termostato-agile-corsa-etc.png"
    },
    {
      brand: "GM ORIGINAL",
      line1: "Kit distribución",
      line2: "",
      subtitle: "CRUZE 1.8 16V | TRACKER 1.8 16V | SONIC 1.6 16V",
      imageSrc: "/images/recortes/kit-distribucion-original-cruze18-tracker18-sonic-16.png"
    },
    {
      brand: "ACDELCO",
      line1: "Juego de ",
      line2: "Cables y Bujías",
      subtitle: "CHEVROLET",
      imageSrc: "/images/recortes/juego-de-cables-y-bujias-chevrolet.png"
    },
    {
      brand: "ACDELCO",
      line1: "Amortiguador",
      line2: "Delantero",
      subtitle: "ORIGINAL CHEVROLET",
      imageSrc: "/images/recortes/amortiguador-delantero-org-chevrolet.png"
    },
    {
      brand: "ACDELCO",
      line1: "Amortiguador",
      line2: "Trasero",
      subtitle: "ORIGINAL CHEVROLET",
      imageSrc: "/images/recortes/amortiguador-trasero-org-chevrolet.png"
    },
    {
      brand: "LUK",
      line1: "Kit embrague",
      line2: "S10 / Blazer 2.8TD",
      subtitle: "MWM (258mm)",
      imageSrc: "/images/recortes/kit-embrague-luk-s10.png"
    },
    {
      brand: "ACDELCO",
      line1: "Kit de",
      line2: "Embrague",
      subtitle: "ORIGINAL CHEVROLET",
      imageSrc: "/images/recortes/kit-embrague-original-chevrolet.png"
    },
    {
      brand: "GM",
      line1: "Parrilla de",
      line2: "Suspensión",
      subtitle: "CRUZE 17",
      imageSrc: "/images/recortes/parrilla-suspension-cruze-17.png"
    },
    {
      brand: "GM",
      line1: "Tapa de",
      line2: "Distribución",
      subtitle: "CORSA 1.4 / 1.6",
      imageSrc: "/images/recortes/juego-tapa-distribucion-corsa-14.png"
    },
    {
      brand: "MWM",
      line1: "Kit embrague",
      line2: "Original",
      subtitle: "S10 / BLAZER 2.8TD MWM (258mm)",
      imageSrc: "/images/recortes/kit-embrague-original-s10.png"
    },
    {
      brand: "LUK",
      line1: "Kit embrague",
      line2: "Corsa 1.6",
      subtitle: "",
      imageSrc: "/images/recortes/kit-embrague-corsa-16.png"
    }
  ];

  return (
    <>
      <Hero
        backgroundImage="/images/hero-bg.jpg"
        headingText={`Venta de repuestos,<br />autopartes y accesorios<br />para Toyota y Chevrolet`}
      />
      <section className="bg-white grid grid-cols-2 items-center mx-auto justify-center h-115 px-5 text-center">
        <div className="">
          <span className="text-2xl md:text-4xl font-normal mb-4">
            Si no tenemos el repuesto que necesitás,
            <span className="text-2xl md:text-4xl font-semibold">
              {' '}lo conseguimos en tiempo record.
            </span>
          </span>
        </div>
        <div className="px-4 md:px-10">
          <p className="text-lg  md:text-2xl text-left text-black max-w-2xl mx-auto mb-4">
            Brindamos atención personalizada, respondiendo a las necesidades de nuestros clientes.
          </p>
          <div className="flex items-center gap-1 max-w-2xl mx-auto">
            <a
              href="https://wa.me/543584011515"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2 rounded-full hover:bg-gray-100 transition text-xl md:text-3xl lg:text-4xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="wa.link/qobkad"
              className="inline-block text-xs  md:text-lg bg-[#0054A6] hover:bg-[#0054A6] text-white font-medium px-0.5 md:px-6 py-3 rounded-3xl transition"
            >
              +54 9 3584 01-1515
            </a>
          </div>
        </div>
      </section>

      <MainSlider items={productos} SlideComponent={SlideCard} />
      <Workers
        images={[
          "/images/front1.jpg",
          "/images/front2.jpg",
          "/images/front3.jpg"
        ]}
      />
      <section className="bg-white grid grid-cols-2 items-center mx-auto justify-center h-115 px-5 text-center">
        <div className="">
          <span className="text-2xl md:text-4xl font-normal mb-4">
            Rapidez en envíos:{' '}
            <span className="text-2xl md:text-4xl font-semibold">
              Cobertura eficiente para toda la zona
            </span>
          </span>
        </div>
        <div className="px-4 md:px-10">
          <p className="text-lg md:text-2xl text-left text-black max-w-2xl mx-auto mb-4">
            Realizamos envíos a toda la zona, asegurando que tus repuestos lleguen el
            mismo día o al día siguiente.
          </p>

          <div className="flex items-center gap-1 max-w-2xl mx-auto">
            <a
              href="https://wa.me/543584011515"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2 rounded-full hover:bg-gray-100 transition text-xl md:text-3xl lg:text-4xl"
            >
              <FaPaperPlane />
            </a>
            <a
              href="wa.link/qobkad"
              className="inline-block text-xs  md:text-lg bg-red-600 hover:bg-red-700 text-white font-medium px-0.5 md:px-8 py-3 rounded-3xl transition"
            >
              +54 9 3584 01-1515
            </a>
          </div>
        </div>

      </section>


    </>
  );
}

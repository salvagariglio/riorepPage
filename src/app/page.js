"use client";

import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import Hero from "@/components/Hero";
import Workers from "@/components/Workers";
import MainSlider from '@/components/MainSlider';
import SlideCard from '@/components/SlideCard';

export default function HomePage() {

  const productos = [
    {
      imageSrc: "/images/recortes/1.png"
    },
    {
      imageSrc: "/images/recortes/2.png"
    },
    {
      imageSrc: "/images/recortes/3.png"
    },
    {
      imageSrc: "/images/recortes/4.png"
    },
    {
      imageSrc: "/images/recortes/5.png"
    },
    {
      imageSrc: "/images/recortes/6.png"
    },
    {
      imageSrc: "/images/recortes/7.png"
    },
    {
      imageSrc: "/images/recortes/8.png"
    },
    {
      imageSrc: "/images/recortes/9.png"
    },
  ];


  return (
    <>
      <Hero
        backgroundImage="/images/hero-bg.jpg"
        headingText={`Venta de repuestos,<br />autopartes y accesorios<br />para Toyota y Chevrolet`}
        bgPosition="right"
        bgPositionMobile="85% center"
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
              href="https://wa.me/543584011515"
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
              href="https://wa.me/543584011515"
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

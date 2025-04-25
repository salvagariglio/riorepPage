"use client";
import Link from "next/link";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Hero from "@/components/Hero";
import Workers from "@/components/Workers";
import ObjectSlider from '@/components/ObjectSlider';
import SlideCard from '@/components/SlideCard';

export default function HomePage() {

  const productos = [
    {
      brand: 'NAKATA',
      line1: 'Kit de Junta',
      line2: 'Homocinética',
      subtitle: 'CORSA | AGILE | COROLLA | OTROS',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 0'),
      onArrowClick: () => console.log('arrow 0'),
    },
    {
      brand: 'SCHAEFFLER | LUK',
      line1: 'Kit de',
      line2: 'Embrague',
      subtitle: 'CORSA 1.6 | CHEVROLET',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 1'),
      onArrowClick: () => console.log('arrow 1'),
    },
    {
      brand: 'SCHAEFFLER | LUK',
      line1: 'Kit de',
      line2: 'Embrague',
      subtitle: 'CORSA 1.6 | CHEVROLET',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 1'),
      onArrowClick: () => console.log('arrow 1'),
    },
    {
      brand: 'SCHAEFFLER | LUK',
      line1: 'Kit de',
      line2: 'Embrague',
      subtitle: 'CORSA 1.6 | CHEVROLET',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 1'),
      onArrowClick: () => console.log('arrow 1'),
    },
    {
      brand: 'SCHAEFFLER | LUK',
      line1: 'Kit de',
      line2: 'Embrague',
      subtitle: 'CORSA 1.6 | CHEVROLET',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 1'),
      onArrowClick: () => console.log('arrow 1'),
    },
    {
      brand: 'SCHAEFFLER | LUK',
      line1: 'Kit de',
      line2: 'Embrague',
      subtitle: 'CORSA 1.6 | CHEVROLET',
      imageSrc: '/images/slidergen.PNG',
      onPlusClick: () => console.log('plus 1'),
      onArrowClick: () => console.log('arrow 1'),
    },
    // añade más objetos según necesites
  ];
  return (
    <>
      <Hero />

      {/* Tiempo record */}
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
              href="https://wa.me/543584015151"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2 rounded-full hover:bg-gray-100 transition text-xl md:text-3xl lg:text-4xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="wa.link/qobkad"
              className="inline-block text-xs  md:text-lg bg-blue-700 hover:bg-blue-800 text-white font-medium px-0.5 md:px-6 py-3 rounded-3xl transition"
            >
              +54 9 3584 01-1515
            </a>
          </div>
        </div>
      </section>

      <ObjectSlider items={productos} SlideComponent={SlideCard} />
      <Workers />
      {/* Rapidez en envíos */}
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
              href="https://wa.me/543584015151"
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

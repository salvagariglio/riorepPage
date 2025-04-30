import Hero from "@/components/Hero";
import Workers from "@/components/Workers";
import ProductSlider from "@/components/ProductSlider"

export default function ProductosPage() {

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
        <section className="min-h-screen">
            <Hero
                backgroundImage="/images/hero-bg.jpg"
                headingText={`Conoce nuestros<br />productos destacados<br />para Toyota y Chevrolet`}
            />
            <ProductSlider items={productos} />
            <Workers
                images={[
                    "/images/frontProducts1.jpg",
                    "/images/frontProducts2.jpg",
                    "/images/frontProducts3.jpg"
                ]}
            />

        </section>
    );
}

import Hero from "@/components/Hero";
import Workers from "@/components/Workers";
import ProductSlider from "@/components/ProductSlider"

export default function ProductosPage() {

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
        <section className="min-h-screen">
            <Hero
                backgroundImage="/images/hero-products.jpg"
                headingText={`Conoce nuestros<br />productos destacados<br />para Toyota y Chevrolet`}
                bgPosition="left"
                bgPositionMobile="35% center"
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

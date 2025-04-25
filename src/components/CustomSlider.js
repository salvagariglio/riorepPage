'use client';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SlideCard from './SlideCard';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

function PrevArrow({ className, style, onClick }) {
    return (
        <button
            type="button"
            className={`
        absolute left-0 top-1/2 transform -translate-y-1/2 -ml-8
        z-20 text-white text-2xl
        `}
            style={style}
            onClick={onClick}
        >
            <FaArrowLeft />
        </button>
    );
}

function NextArrow({ className, style, onClick }) {
    return (
        <button
            type="button"
            className={`
        absolute right-0 top-1/2 transform -translate-y-1/2 -mr-8
        z-20 text-white text-2xl
        `}
            style={style}
            onClick={onClick}
        >
            <FaArrowRight />
        </button>
    );
}

export default function CustomSlider() {
    const items = [
        {
            brand: 'NAKATA',
            line1: 'Kit de Junta',
            line2: 'Homocinética',
            subtitle: 'CORSA | AGILE | COROLLA | OTROS',
            imageSrc: '/images/rally.PNG',
        },
        {
            brand: 'SCHAEFFLER | LUK',
            line1: 'Kit de',
            line2: 'Embrague',
            subtitle: 'CORSA 1.6 | CHEVROLET',
            imageSrc: '/images/rally.PNG',
        },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="relative bg-red-500 py-12 px-4">
            <div className="overflow-visible">
                <Slider {...settings} className="overflow-visible">
                    {items.map((item, i) => (
                        <div key={i} className="px-4">
                            <SlideCard
                                {...item}
                                onPlusClick={() => console.log('plus', i)}
                                onArrowClick={() => console.log('arrow', i)}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

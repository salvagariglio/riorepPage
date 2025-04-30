'use client';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlideCard from './SlideCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSlider({ items = [] }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Esperamos a que el componente esté montado para que las refs estén listas
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="bg-red-600 w-full">
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-16 py-6 bg-transparent">
                <Link href="https://www.chevrolet.com.ar/">
                    <Image
                        src="/images/chevrolet.png"
                        alt="Chevrolet"
                        className="w-24 sm:w-36 lg:w-44 object-contain"
                        width={160}
                        height={50}
                    />
                </Link>
                <div className="w-px h-10 bg-white" />
                <Link href="https://www.toyota.com.ar/">
                    <Image
                        src="/images/toyota3.png"
                        alt="Toyota"
                        className="w-20 sm:w-28 lg:w-36 object-contain"
                        width={140}
                        height={50}
                    />
                </Link>
            </div>
            <section className="relative bg-red-600 h-[420px] px-4 sm:px-6 md:px-14 overflow-visible flex items-center">
                <div
                    ref={prevRef}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
                >
                    <button className="text-white bg-red-600 border border-white rounded-full p-2 shadow-md hover:bg-red-700 transition">
                        <FaArrowLeft size={20} />
                    </button>
                </div>
                <div
                    ref={nextRef}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
                >
                    <button className="text-white bg-red-600 border border-white rounded-full p-2 shadow-md hover:bg-red-700 transition">
                        <FaArrowRight size={20} />
                    </button>
                </div>

                {isMounted && (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (prevRef.current && nextRef.current) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="w-full h-full"
                    >
                        {items.map((item, i) => (
                            <SwiperSlide key={i} className="h-full">
                                <div className="flex items-center justify-center h-full px-2">
                                    <SlideCard
                                        {...item}
                                        onPlusClick={() => console.log('plus', i)}
                                        onArrowClick={() => console.log('arrow', i)}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </section>

            <div className="flex justify-center  pb-20 bg-transparent">
                <Link href="https://www.chevrolet.com.ar/">
                    <Image
                        src="/images/logo-white.png"
                        alt="Logo Chevrolet"
                        className="w-36 sm:w-44 md:w-52 lg:w-60 xl:w-72 object-contain"
                        width={300}
                        height={100}
                    />
                </Link>
            </div>
        </div>
    );
}

'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlideCard from './SlideCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ProductSlider({ items }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="relative bg-[#0054A6] h-[600px] px-4 sm:px-6 md:px-14 overflow-visible flex items-center">
            <div
                ref={prevRef}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
            >
                <button className="text-white bg-red-700  border border-white rounded-full p-2 shadow-md hover:bg-red-600 transition">
                    <FaArrowLeft size={20} />
                </button>
            </div>
            <div
                ref={nextRef}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
            >
                <button className="text-white bg-red-700 border border-white rounded-full p-2 shadow-md hover:bg-red-600 transition">
                    <FaArrowRight size={20} />
                </button>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
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
        </section>
    );
}
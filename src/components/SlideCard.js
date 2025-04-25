'use client';

import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function SlideCard({
    brand,
    line1,
    line2,
    subtitle,
    imageSrc,
}) {
    const router = useRouter();

    return (
        <article className="relative bg-white rounded-2xl h-60 w-80 flex flex-col p-6 overflow-visible">
            <div className="flex justify-between items-center">
                <span className="text-[clamp(0.75rem,1.2vw,1rem)] text-gray-500">
                    {brand}
                </span>
                <button
                    onClick={() => router.push('/productos')}
                    className="text-black hover:text-blue-700 transition z-10"
                >
                    <FaArrowRight className="w-[clamp(1rem,2vw,1.5rem)] h-[clamp(1rem,2vw,1.5rem)]" />
                </button>
            </div>

            <div className="text-center space-y-1 pt-6">
                <h3 className="text-[clamp(1rem,2.5vw,1.5rem)] font-light">{line1}</h3>
                <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-bold">{line2}</h2>
                <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-gray-400">{subtitle}</p>
            </div>

            <div
                className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 translate-y-1/2
                    w-32 h-32 sm:w-40 sm:h-40 md:w-38 md:h-38 lg:w-36 lg:h-36
                    overflow-visible z-50 transition"
            >
                <Image
                    src={imageSrc}
                    alt={line2}
                    fill
                    className="object-contain"
                />
            </div>
        </article>
    );
}

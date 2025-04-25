'use client'

import Image from 'next/image'

const images = [
    { src: '/images/gallery1.jpg' },
    { src: '/images/gallery2.jpg' },
    { src: '/images/gallery3.jpg' },
    { src: '/images/gallery4.jpg' },
    { src: '/images/gallery5.jpg' },
    { src: '/images/gallery6.jpg' },
    { src: '/images/gallery7.jpg' },
    { src: '/images/gallery8.jpg' },
    { src: '/images/gallery9.jpg' }
]

export default function Gallery() {
    return (
        <section className="px-4 pt-16 pb-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Descubre más sobre nosotros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map(({ src }, i) => (
                    <figure key={i} className="flex flex-col items-center">
                        <div className="w-full h-64 sm:h-72 md:h-80 relative overflow-hidden  shadow-md">
                            <Image
                                src={src}
                                alt=''
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw,
                                    (max-width: 768px) 50vw,
                                    33vw"
                            />
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    )
}

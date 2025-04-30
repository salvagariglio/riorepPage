'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SlideCard({ imageSrc }) {
    const router = useRouter();

    return (
        <article className="relative h-60 w-80 flex flex-col p-6 overflow-visible">
            <div className="relative w-full h-full">
                <Image
                    alt=""
                    src={imageSrc}
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </article>
    );
}

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SlideCard({
    imageSrc,
}) {
    const router = useRouter();

    return (
        <article className="relative  h-60 w-80 flex flex-col p-6 overflow-visible">
            <div>
                <Image
                    alt=''
                    src={imageSrc}
                    width={800}
                    height={8000}
                />
            </div>
        </article>
    );
}

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SlideCard({
    imageSrc,
}) {
    const router = useRouter();

    return (
        <article className="relative  h-90 w-90 flex flex-col p-6 overflow-visible">
            <div>
                <Image
                    alt=''
                    src={imageSrc}
                    width={900}
                    height={900}
                />
            </div>
        </article>
    );
}
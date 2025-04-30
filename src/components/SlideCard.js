'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SlideCard({
    imageSrc,
}) {
    const router = useRouter();

    return (
        <article className="relative h-90 w-90 flex flex-col p-6 overflow-visible">
            <Link href="/contacto">
                <Image
                    alt=""
                    src={imageSrc}
                    width={900}
                    height={900}
                    className="cursor-pointer"
                />
            </Link>
        </article>
    );
}
import Image from "next/image";

export default function Workers({ images }) {
    return (
        <div className="bg-black w-full grid grid-cols-2 md:grid-cols-3 gap-0">
            {images.map((imgSrc, idx) => (
                <div
                    key={idx}
                    className={`
                        ${idx === 2 ? "hidden md:block" : ""}
                        relative w-full h-[300px] lg:h-[500px]
                    `}
                >
                    <Image
                        src={imgSrc}
                        alt={`Trabajador ${idx + 1}`}
                        fill
                        quality={75}
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    );
}

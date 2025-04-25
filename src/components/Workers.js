import Image from "next/image";

export default function Workers() {
    return (
        <div className="bg-black w-full grid grid-cols-2 md:grid-cols-3 gap-0">
            {[1, 2, 3].map((i, idx) => (
                <div
                    key={i}
                    className={`
                        ${idx === 2 ? "hidden md:block" : ""}  /* oculta el tercero <768px */
                        relative w-full
                        h-[300px]  lg:h-[500px]
                        `}
                >
                    <Image
                        src={`/images/front${i}.jpg`}
                        alt={`Trabajador ${i}`}
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

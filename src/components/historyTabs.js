'use client'
import { useState } from 'react'
import Image from 'next/image'

const TABS = [
    {
        id: 'historia',
        label: 'Historia',
        title: 'Historia y experiencia',
        images: ['/images/rally.PNG'],
        content:
            'Desde hace más de 60 años, nuestra familia vive y respira automóviles: de talleres de mecánica general a pistas de competición. Hace 7 años, dos hermanos decidieron canalizar esa pasión creando un punto de venta de repuestos, con foco en Toyota y Chevrolet. Lo que comenzó como un sueño compartido hoy te abre sus puertas a ti: sé parte de esta trayectoria que une tradición e innovación, y recorre con nosotros el camino que pone a tu auto siempre en marcha.',
    },
    {
        id: 'fidelidad',
        label: 'Fidelidad',
        title: 'Fidelidad de clientes y proveedores',
        images: [],
        content:
            'Creemos que cada automóvil es tan importante como quien lo conduce. Por eso tenemos un trato cercano con el cliente, asesoramiento personalizado y tiempos de respuesta ágiles. Nuestros proveedores también forman parte de esta red de confianza, lo que nos permite mantener precios competitivos y un stock creciente. Con más de 10 colaboradores y una renovación que duplicó nuestro espacio de almacenamiento el último año, garantizamos disponibilidad para que cada cliente —especialmente amantes de Toyota y Chevrolet— encuentre justo lo que necesita.',
    },
    {
        id: 'vision',
        label: 'Proyección',
        title: 'Empresa familiar',
        images: ['/images/historia1.PNG', '/images/historia2.jpg'],
        content:
            'Te invitamos a mirar hacia adelante junto a nosotros. Nuestra visión es consolidarnos como referente regional en repuestos automotrices, combinando una experiencia de compra ágil y la cercanía de un equipo que te conoce por tu nombre. Queremos seguir creciendo en una sola ubicación, perfeccionando nuestros procesos y ampliando la gama de repuestos disponibles para que tu viaje sea siempre seguro, eficiente y lleno de la pasión por el motor.',
    },
]

export default function SimpleTabs() {
    const [active, setActive] = useState(TABS[0].id)
    const current = TABS.find((t) => t.id === active)

    return (
        <div className="md:flex md:items-stretch justify-center gap-10 max-w-5xl mx-auto">
            <nav className="grid grid-rows-3 grid-cols-1 gap-4 bg-gray-50 p-4 md:w-1/4 h-full">
                {TABS.map(({ id, label }) => {
                    const isActive = id === active
                    return (
                        <button
                            key={id}
                            onClick={() => setActive(id)}
                            className={`
                w-full h-full flex flex-col items-center justify-center
                px-4 py-6 transition rounded-md 
                ${isActive
                                    ? 'bg-blue-800 text-white clip-path-[polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)] shadow-lg'
                                    : 'text-gray-700  hover:bg-gray-200'
                                }
                `}
                        >
                            <Image
                                src={isActive ? '/images/bujia-white.png' : '/images/bujia.png'}
                                alt={label}
                                width={45}
                                height={35}
                            />
                            <span className="mt-2 text-lg md:text-xl font-semibold">{label}</span>
                        </button>
                    )
                })}
            </nav>
            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium">{current.title}</h2>
                    <div className="w-16 h-1 bg-blue-800"></div>
                    <p className="text-gray-700 md:text-xl text-lg">{current.content}</p>
                    {current.images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {current.images.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="w-full h-64 relative overflow-hidden rounded-lg shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`${current.title} imagen ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw,
                                            (max-width: 768px) 50vw,
                                            33vw"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

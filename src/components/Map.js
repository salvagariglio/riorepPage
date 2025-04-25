"use client";

export default function Map() {
    return (
        <div className="w-full h-[500px] md:h-[700px] flex justify-center items-center ">
            <div className="w-full max-w-4xl h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.1210337569373!2d-64.3419637!3d-33.132184699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d20191c4fdfe47%3A0xf59e4abf351056d7!2sRioRep%20Repuestos%20y%20Accesorios%20Chevrolet%20y%20Toyota!5e0!3m2!1ses!2sar!4v1714021816615!5m2!1ses!2sar"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
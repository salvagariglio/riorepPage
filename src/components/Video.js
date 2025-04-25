"use client";

import React, { useEffect, useRef } from "react";

export default function VideoSection({ videoSrc }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        // Asegurar que el video esté muteado para permitir autoplay
        videoEl.muted = true;
        videoEl.playsInline = true;

        // Observer para reproducir/pausar al entrar/salir de viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoEl.play().catch(() => { });
                } else {
                    videoEl.pause();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(videoEl);
        return () => observer.disconnect();
    }, []);

    return (
        <section className=" py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="w-full aspect-video overflow-hidden rounded-lg shadow-lg">
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        autoPlay
                        muted
                        preload="metadata"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

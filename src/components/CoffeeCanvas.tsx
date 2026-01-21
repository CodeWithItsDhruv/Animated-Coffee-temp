"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192;

export default function CoffeeCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isFullLoaded, setIsFullLoaded] = useState(false);

    // Keep a reference to the first image for immediate rendering
    const firstImageRef = useRef<HTMLImageElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentFrame = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // 1. Immediate Load of First Frame
    useEffect(() => {
        const img = new Image();
        img.src = `/images/sequence/1.jpg`;
        img.onload = () => {
            firstImageRef.current = img;
            // Force a render of frame 1 immediately
            renderFrame(1);
        };
    }, []);

    // 2. Background Load of All Frames
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = `/images/sequence/${i}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image ${i}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsFullLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // If full sequence isn't loaded yet, try to use firstImageRef 
        // effectively showing the static first frame until we are ready
        let img = images.length > 0 ? images[Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index) - 1))] : firstImageRef.current;

        if (!img) return;

        // Set canvas dimensions to match window (responsiveness)
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Scaling logic: Cover
        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        );

        const w = img.width * scale;
        const h = img.height * scale;
        const x = (canvas.width - w) / 2;
        // Shift y down by 80px to ensure the glass is visually below the navbar title
        const y = (canvas.height - h) / 2 + 80;

        ctx.drawImage(img, x, y, w, h);
    };

    useMotionValueEvent(currentFrame, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(latest));
    });

    // Re-render on resize
    useEffect(() => {
        const handleResize = () => {
            renderFrame(currentFrame.get());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]); // Re-bind when images are fully loaded so we switch from static ref to array

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
                <canvas ref={canvasRef} className="block w-full h-full" />
                {!isFullLoaded && !firstImageRef.current && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 font-light tracking-widest uppercase text-sm">
                        Brewing Experience...
                    </div>
                )}
            </div>
        </div>
    );
}

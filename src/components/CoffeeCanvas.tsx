"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192;

export default function CoffeeCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
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

    // 2. Chunked Background Load of Frames
    useEffect(() => {
        const loadedBuffer: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);

        const loadBatch = async (start: number, end: number) => {
            const promises = [];
            for (let i = start; i <= end; i++) {
                if (i > FRAME_COUNT) break;
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = `/images/sequence/${i}.jpg`;
                    img.onload = () => {
                        loadedBuffer[i - 1] = img;
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
            // Update state with what we have so far
            setImages([...(loadedBuffer as any)]);
        };

        const initLoad = async () => {
            // Priority 1: First 60 frames (Initial Interaction)
            await loadBatch(1, 60);
            setIsFullLoaded(true); // Mark as ready for interaction

            // Priority 2: Middle section (Defer slightly)
            setTimeout(async () => {
                await loadBatch(61, 120);

                // Priority 3: End section (Defer more)
                setTimeout(async () => {
                    await loadBatch(121, FRAME_COUNT);
                }, 1000);
            }, 1000);
        };

        initLoad();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Robust Retrieval: Try exact frame, then nearest previous frame, then first image
        let targetIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index) - 1));
        let img = images[targetIndex];

        if (!img && images.length > 0) {
            // Fallback to nearest previous loaded frame to prevent blinking
            for (let i = targetIndex; i >= 0; i--) {
                if (images[i]) {
                    img = images[i];
                    break;
                }
            }
        }

        if (!img) img = firstImageRef.current;

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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function OverlaySections() {
    const { scrollYProgress } = useScroll();

    // Features: 25% - 60%
    const opacity1 = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
    const blur1 = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [10, 0, 0, 10]);

    // Testimonials: 60% - 80%
    const opacity2 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.6, 0.65], [0.9, 1]);

    // CTA: 80% - 100%
    const opacity3 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

    // Helper for blur filter
    const filter1 = useTransform(blur1, (v) => `blur(${v}px)`);

    // Initial Hero Text (Fades out quickly)
    const opacityStart = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const yStart = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
    const filterStart = useTransform(scrollYProgress, [0, 0.1], ["blur(0px)", "blur(10px)"]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center items-center h-screen w-full font-sans">

            {/* Section 0: Initial Hero Text */}
            <motion.div
                style={{ opacity: opacityStart, y: yStart, filter: filterStart }}
                className="absolute text-center z-20 pointer-events-none mix-blend-difference"
            >
                <h1 className="text-[12vw] font-black text-white leading-none tracking-tighter">
                    PREMIUM
                </h1>
                <p className="text-xl md:text-2xl text-white/80 tracking-[0.5em] uppercase mt-4">
                    Cold Brew
                </p>
            </motion.div>

            {/* Section 1: Core Features */}
            <motion.div
                style={{ opacity: opacity1, y: y1, filter: filter1 }}
                className="absolute text-center max-w-5xl px-6 w-full"
            >
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
                    ARTISANAL<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">BEANS</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-sm tracking-[0.2em] text-gold uppercase font-medium">
                    <span className="flex items-center justify-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Ethical Sourcing</span>
                    <span className="flex items-center justify-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Precision Roasting</span>
                    <span className="flex items-center justify-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Cold Brewed</span>
                </div>
            </motion.div>

            {/* Section 2: Testimonials - NOW A VISUAL ONLY, TEXT MOVED TO COMPONENT */}
            <motion.div
                style={{ opacity: opacity2, scale: scale2 }}
                className="absolute w-full px-6 md:px-12 max-w-7xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { text: "Purest coffee experience I've ever had. It feels like a daily ritual.", author: "Sarah J." },
                        { text: "The flavor profile is cinematic. It explodes on the palette.", author: "David K." },
                        { text: "Finally, a coffee that looks as good as it tastes.", author: "Elena R." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-xl p-8 border border-white/5 rounded-none md:rounded-2xl">
                            <div className="mb-6 text-gold text-2xl">★★★★★</div>
                            <p className="font-light text-xl text-gray-200 mb-6 leading-relaxed">"{item.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-gold/50"></div>
                                <span className="text-xs font-bold tracking-widest uppercase text-white/60">{item.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

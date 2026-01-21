"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Droplet, Thermometer, Timer, Scale } from "lucide-react";

const guides = [
    {
        title: "The Pour Over",
        difficulty: "Medium",
        time: "3-4 min",
        image: "/images/guide-chemex.png",
        steps: [
            "Weigh 20g of medium-coarse coffee.",
            "Rinse the paper filter with hot water.",
            "Add coffee and pour 40g of water to bloom for 30s.",
            "Pour remaining 300g of water in steady circles.",
            "Let it drain completely. Serve."
        ]
    },
    {
        title: "Perfect Espresso",
        difficulty: "Hard",
        time: "30 sec",
        image: "/images/guide-espresso.png",
        steps: [
            "Grind 18g of fine coffee.",
            "Distribute evenly in portafilter and tamp firm.",
            "Lock in and brew for 25-30 seconds.",
            "Aim for 36g of liquid out.",
            "Crema should be rich and hazelnut colored."
        ]
    }
];

export default function GuidesPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Knowledge Base</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 max-w-4xl mx-auto">
                        RESPECT THE BEAN.
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                        Great coffee deserves great preparation. Here is how we brew at our cafes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-32">
                    {guides.map((guide, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className={`relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">{guide.title}</h2>
                                <div className="flex gap-8 mb-8 text-white/60 text-sm">
                                    <span className="flex items-center gap-2"><Scale size={16} className="text-gold" /> {guide.difficulty}</span>
                                    <span className="flex items-center gap-2"><Timer size={16} className="text-gold" /> {guide.time}</span>
                                </div>
                                <ol className="space-y-6">
                                    {guide.steps.map((step, sIdx) => (
                                        <li key={sIdx} className="flex gap-4 items-start">
                                            <span className="text-gold font-mono text-sm pt-1">0{sIdx + 1}.</span>
                                            <p className="text-white/80 text-lg leading-relaxed">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

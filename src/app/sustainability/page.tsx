"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TreePine, Sprout, Heart } from "lucide-react";

export default function SustainabilityPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="relative mb-24 aspect-[21/9] overflow-hidden rounded-sm">
                    <img
                        src="/images/sustainability-farm.png"
                        alt="Coffee Farm in Colombia"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-12">
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                            TREAD<br />LIGHTLY.
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-8">Our Commitment</h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            We believe that the future of coffee depends on the well-being of the land and the people who cultivate it.
                            Our sustainability mission is not just a marketing slogan; it is the core of our business model.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed">
                            We pay an average of 3.5x the Fair Trade minimum to our partner farmers. This ensures that they can invest in
                            their farms, their families, and their communities. We also fund specific projects related to water conservation
                            and soil health in Ethiopia and Colombia.
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div>
                            <TreePine size={32} className="text-gold mb-4" />
                            <h3 className="text-white font-bold uppercase tracking-wide mb-2">Carbon Neutral</h3>
                            <p className="text-white/40 text-sm">We offset 100% of our carbon footprint from farm to cup.</p>
                        </div>
                        <div>
                            <Sprout size={32} className="text-gold mb-4" />
                            <h3 className="text-white font-bold uppercase tracking-wide mb-2">Compostable</h3>
                            <p className="text-white/40 text-sm">Our packaging is 100% home compostable and free from plastics.</p>
                        </div>
                        <div>
                            <Heart size={32} className="text-gold mb-4" />
                            <h3 className="text-white font-bold uppercase tracking-wide mb-2">Community First</h3>
                            <p className="text-white/40 text-sm">We invest 5% of our revenue back into origin communities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

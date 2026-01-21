"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                            CRAFTING<br />CULTURE.
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                            Born from a desire to redefine the coffee experience. We are a collective of roasters, baristas, and artists dedicated to the perfect cup.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5">
                        <img
                            src="/images/about-team.png"
                            alt="The Lumiere Team"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <div className="border-t border-white/10 pt-8">
                        <span className="text-gold font-mono text-sm mb-4 block">01.</span>
                        <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4">Direct Trade</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We work directly with farmers to ensure fair wages and sustainable practices. No middlemen, no compromises.
                        </p>
                    </div>
                    <div className="border-t border-white/10 pt-8">
                        <span className="text-gold font-mono text-sm mb-4 block">02.</span>
                        <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4">Precision Roasting</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Every batch is roasted in small quantities to highlight the unique characteristics of the bean's origin.
                        </p>
                    </div>
                    <div className="border-t border-white/10 pt-8">
                        <span className="text-gold font-mono text-sm mb-4 block">03.</span>
                        <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4">Education First</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We believe that understanding coffee elevates the experience. We're here to guide you on your journey.
                        </p>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 h-[600px] mb-32">
                    <div className="relative overflow-hidden group h-full">
                        <img src="/images/story-origin.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                        <div className="absolute bottom-6 left-6">
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Sourcing</h4>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group h-full">
                        <img src="/images/story-roasting.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                        <div className="absolute bottom-6 left-6">
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Roasting</h4>
                        </div>
                    </div>
                </div>

                {/* Manifesto */}
                <div className="max-w-3xl mx-auto text-center border p-12 border-white/5 bg-white/5">
                    <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8">The Manifesto</p>
                    <p className="text-white text-2xl md:text-3xl font-light leading-relaxed mb-12">
                        "We believe coffee is more than a beverage. It is a ritual, a craft, and a connection to the earth. We exist to honor that connection."
                    </p>
                    <div className="w-16 h-[1px] bg-gold mx-auto"></div>
                </div>

            </section>

            <Footer />
        </main>
    );
}

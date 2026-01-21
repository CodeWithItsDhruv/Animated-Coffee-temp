"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WholesalePage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 max-w-7xl mx-auto pb-24 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Partnerships</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                            SERVE THE<br />BEST.
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                            Partner with Lumière to bring exceptional coffee to your cafe, restaurant, or hotel. We provide more than just beans; we provide a complete coffee program.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Custom Roast Profiles", "Barista Training", "Equipment Sourcing", "Menu Consultation"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold uppercase text-sm tracking-wide">
                                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Inquire Now</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/60">Business Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/60">Contact Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Business Type</label>
                                <select className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors">
                                    <option>Cafe / Coffee Shop</option>
                                    <option>Restaurant</option>
                                    <option>Hotel / Hospitality</option>
                                    <option>Office</option>
                                    <option>Retail</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/60">Projected Volume (lbs/week)</label>
                                <input type="text" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors" />
                            </div>

                            <button className="w-full bg-gold text-black font-bold py-4 uppercase tracking-[0.2em] hover:bg-white transition-colors mt-4">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

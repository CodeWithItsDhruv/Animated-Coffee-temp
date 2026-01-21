"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                    {/* Left Column: Info & Image */}
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Contact</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-none">
                            GET IN<br />TOUCH.
                        </h1>

                        <div className="space-y-12 mb-16">
                            <div className="group">
                                <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-2 flex items-center gap-3">
                                    <MapPin size={18} className="text-gold" />
                                    Visit Us
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-2 pl-8">
                                    128 Gold Street, SoHo<br />
                                    New York, NY 10013
                                </p>
                                <a href="#" className="text-gold text-xs font-bold uppercase tracking-widest pl-8 hover:text-white transition-colors flex items-center gap-1">
                                    Get Directions <ArrowUpRight size={10} />
                                </a>
                            </div>

                            <div>
                                <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-2 flex items-center gap-3">
                                    <Mail size={18} className="text-gold" />
                                    Email
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed pl-8">
                                    General: hello@lumiere.coffee<br />
                                    Wholesale: partners@lumiere.coffee
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-2 flex items-center gap-3">
                                    <Phone size={18} className="text-gold" />
                                    Phone
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed pl-8">
                                    +1 (212) 555 - 0123
                                </p>
                            </div>
                        </div>

                        <div className="aspect-square relative rounded-sm overflow-hidden opacity-90 grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/images/cafe-exterior.png" alt="Lumiere Storefront" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 self-start sticky top-32">
                        <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Subject</label>
                                <select className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Wholesale</option>
                                    <option>Careers</option>
                                    <option>Press</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-black/50 border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-[0.2em] mt-4 hover:bg-gold transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

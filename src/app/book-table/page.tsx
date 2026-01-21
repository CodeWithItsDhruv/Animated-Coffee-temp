"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function BookTablePage() {
    const { addBooking } = useApp();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 2
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addBooking(formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="bg-neutral-950 min-h-screen">
            <Header className="bg-transparent" />

            <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/cafe-interior.png" alt="Cafe Interior" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Intro Text */}
                    <div className="text-white">
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Reservations</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                            SAVOR THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20">ATMOSPHERE</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8">
                            Experience our flagship roastery and cafe. Immerse yourself in the world of coffee with our tasting menus and omakase service.
                        </p>

                        <div className="flex gap-12 text-white/40 font-mono text-sm">
                            <div>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-custom">Location</h4>
                                <p>128 Gold Street</p>
                                <p>New York, NY 10013</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-custom">Hours</h4>
                                <p>Mon-Fri: 7am - 7pm</p>
                                <p>Sat-Sun: 8am - 8pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                        {submitted ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/90 z-20">
                                <CheckCircle className="text-gold w-16 h-16 mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">Confirmed</h3>
                                <p className="text-white/60">Your table has been reserved. We look forward to hosting you.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-gold text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors"
                                >
                                    Make another booking
                                </button>
                            </div>
                        ) : null}

                        <h3 className="text-2xl font-bold text-white mb-8">Request a Table</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
                                        placeholder="john@example.com"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><Calendar size={12} /> Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors calendar-input"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><Clock size={12} /> Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white/40 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><Users size={12} /> Guests</label>
                                <select
                                    name="guests"
                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                                    onChange={handleChange}
                                    defaultValue={2}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <option key={num} value={num} className="bg-neutral-900 text-white">{num} Guests</option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-gold text-black font-bold py-4 uppercase tracking-[0.2em] mt-8 hover:bg-white transition-colors">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

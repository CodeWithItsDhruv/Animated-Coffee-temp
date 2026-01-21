"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "How fresh is the coffee?",
        answer: "Every bag is roasted to order. We ship within 48 hours of roasting to ensure peak freshness when it arrives at your doorstep."
    },
    {
        question: "Where do you source your beans?",
        answer: "We work directly with small-lot farmers in Ethiopia, Colombia, and Costa Rica. We pay well above fair-trade prices to ensure sustainability and quality."
    },
    {
        question: "Can I pause my subscription?",
        answer: "Absolutely. You can pause, skip, or cancel your subscription at any time directly from your account dashboard. No questions asked."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Currently, we ship to the US, Canada, and select European countries. We are working on expanding our reach globally."
    },
    {
        question: "What is the best way to brew Lumière coffee?",
        answer: "We recommend a pour-over method (V60 or Chemex) for our lighter roasts to highlight the floral notes. For our darker roasts, an Espresso machine or French Press works famously."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 max-w-4xl mx-auto pb-24">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 text-center">FAQ</h1>
                <p className="text-white/60 text-center mb-16 text-lg">Everything you need to know about Lumière.</p>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => (
                        <div key={idx} className="border border-white/10 bg-white/5 rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-white uppercase tracking-wide text-sm pr-8">{item.question}</span>
                                {openIndex === idx ? <Minus className="text-gold" size={20} /> : <Plus className="text-white/40" size={20} />}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-white/70 leading-relaxed text-sm">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

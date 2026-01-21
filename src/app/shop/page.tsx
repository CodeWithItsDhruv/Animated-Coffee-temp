"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
    const { products } = useApp();

    return (
        <main className="bg-background min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" /> {/* Darker header for content pages */}

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-5xl font-black text-white tracking-tighter mb-4">OUR COLLECTION</h1>
                        <p className="text-white/40 max-w-md">Small batch, artisanal roasts sourced from ethical farms across the globe.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-gold font-bold text-sm">ALL</span>
                        <span className="text-white/40 font-bold text-sm hover:text-white cursor-pointer">BEANS</span>
                        <span className="text-white/40 font-bold text-sm hover:text-white cursor-pointer">MERCH</span>
                        <span className="text-white/40 font-bold text-sm hover:text-white cursor-pointer">EQUIPMENT</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden">
                                <Link href={`/shop/${product.slug}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <button className="bg-gold text-black px-8 py-3 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors flex items-center gap-2 pointer-events-auto">
                                        <ShoppingBag size={14} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <Link href={`/shop/${product.slug}`} className="group-hover:text-gold transition-colors">
                                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                                </Link>
                                <span className="text-lg font-mono text-white">${product.price}</span>
                            </div>
                            <div>
                                <p className="text-white/40 text-sm mb-2">{product.category}</p>
                                <p className="text-white/60 text-xs tracking-wide">{product.notes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

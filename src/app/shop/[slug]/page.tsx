"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useApp, Product } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Star, Coffee, Truck, ShieldCheck } from "lucide-react";

export default function ProductPage() {
    const params = useParams();
    const { products } = useApp();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params?.slug) {
            const found = products.find(p => p.slug === params.slug);
            if (found) {
                setProduct(found);
            }
        }
        setLoading(false);
    }, [params, products]);

    if (loading) return <div className="bg-neutral-950 min-h-screen"></div>;

    if (!product) {
        return (
            <main className="bg-neutral-950 min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/shop" className="text-gold hover:underline">Return to Shop</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <Link href="/shop" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
                    <ArrowLeft size={16} /> Back to Collection
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">{product.name}</h1>
                            <span className="text-2xl font-mono text-gold">${product.price}</span>
                        </div>

                        <div className="flex gap-4 mb-8 text-sm">
                            <span className="bg-white/10 text-white px-3 py-1 rounded-full">{product.category}</span>
                            <div className="flex items-center gap-1 text-gold">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <span className="text-white/40 ml-2">(24 Reviews)</span>
                            </div>
                        </div>

                        <p className="text-white/60 text-lg leading-relaxed mb-8 border-b border-white/10 pb-8">
                            {product.description}
                        </p>

                        <div className="mb-8 space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-wide text-sm">Tasting Notes</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.notes.split(', ').map((note, index) => (
                                    <span key={index} className="text-gold border border-gold/30 px-4 py-2 text-sm uppercase tracking-wider">
                                        {note}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mb-12">
                            <button className="flex-1 bg-white text-black font-bold py-4 uppercase tracking-[0.2em] hover:bg-gold transition-colors flex items-center justify-center gap-2">
                                <ShoppingBag size={18} /> Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            <div className="text-center">
                                <Truck size={24} className="text-white/40 mx-auto mb-3" />
                                <p className="text-white text-xs font-bold uppercase">Free Shipping</p>
                                <p className="text-white/40 text-[10px]">On orders over $50</p>
                            </div>
                            <div className="text-center">
                                <Coffee size={24} className="text-white/40 mx-auto mb-3" />
                                <p className="text-white text-xs font-bold uppercase">Fresh Roasted</p>
                                <p className="text-white/40 text-[10px]">Shipped within 48h</p>
                            </div>
                            <div className="text-center">
                                <ShieldCheck size={24} className="text-white/40 mx-auto mb-3" />
                                <p className="text-white text-xs font-bold uppercase">Satisfaction</p>
                                <p className="text-white/40 text-[10px]">Guaranteed Quality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

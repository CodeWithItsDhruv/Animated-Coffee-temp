"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowLeft, Check, Calendar, Package, Gift, CreditCard, Star } from "lucide-react";

// Define Plan Data
const SUBSCRIPTION_PLANS: Record<string, {
    name: string;
    price: string;
    frequency: string;
    description: string;
    features: string[];
    image: string;
    longDescription: string;
    type: 'subscription' | 'gift';
}> = {
    personal: {
        name: "PERSONAL",
        price: "$24",
        frequency: "Monthly",
        description: "Perfect for the daily drinker. 2 bags of our roaster's choice.",
        features: ["2x 12oz Bags", "Roaster's Choice", "Free Shipping", "Cancel Anytime", "Tasting Notes Included"],
        image: "/images/product-noir.png", // Using existing asset
        longDescription: "Our Personal plan is designed for the coffee lover who enjoys a morning ritual. Each month, our head roaster selects two distinct single-origin coffees or seasonal blends to showcase the diversity of our sourcing. You'll receive two 12oz bags, freshly roasted and shipped within 48 hours.",
        type: 'subscription'
    },
    obsessed: {
        name: "OBSESSED",
        price: "$44",
        frequency: "Monthly",
        description: "For those who never want to run out. 4 bags of premium selection.",
        features: ["4x 12oz Bags", "Full Access to Reserves", "Priority Shipping", "First Access to Drops", "Exclusive Merch Discounts"],
        image: "/images/product-gold.png", // Using existing asset
        longDescription: "The Obsessed plan is for the serious enthusiast. With four bags delivered monthly, you'll have ample supply to explore different brewing methods. This plan includes occasional limited-run 'Reserve' lots that are not available to the general public.",
        type: 'subscription'
    },
    office: {
        name: "OFFICE",
        price: "$120",
        frequency: "Monthly",
        description: "Keep the team fueled. 5lb bulk bag for high volume.",
        features: ["5lb Bulk Bag", "Weekly Delivery Options", "Equipment support", "Dedicated Account Manager", "Wholesale Equipment Pricing"],
        image: "/images/product-reserve.png", // Using existing asset
        longDescription: "Elevate your office culture with Lumière coffee. Our Office plan provides a steady stream of premium beans in a convenient 5lb bulk format. We also offer consultation on brewing equipment to ensure your team gets the best cup possible.",
        type: 'subscription'
    },
    gift: {
        name: "GIFT SUBSCRIPTION",
        price: "From $70",
        frequency: "One-time",
        description: "The perfect gift for the coffee snob in your life.",
        features: ["Prepaid 3, 6, or 12 Months", "Beautiful Gift Packaging", "Personalized Note Card", "No Recurring Charges"],
        image: "/images/subscription-hero.png",
        longDescription: "Give the gift of better mornings. Choose a 3, 6, or 12-month prepaid subscription. We'll send a beautifully packaged welcome kit with the first shipment, including a personalized note from you. It's the gift that keeps on caffeinating.",
        type: 'gift'
    }
};

export default function SubscriptionDetail() {
    const params = useParams();
    const [plan, setPlan] = useState<typeof SUBSCRIPTION_PLANS['personal'] | null>(null);
    const [loading, setLoading] = useState(true);

    // Mock state form for Gift
    const [giftDuration, setGiftDuration] = useState(3);

    useEffect(() => {
        if (params?.slug && typeof params.slug === 'string') {
            const key = params.slug.toLowerCase();
            if (SUBSCRIPTION_PLANS[key]) {
                setPlan(SUBSCRIPTION_PLANS[key]);
            }
        }
        setLoading(false);
    }, [params]);

    if (loading) return <div className="bg-neutral-950 min-h-screen"></div>;

    if (!plan) {
        return (
            <main className="bg-neutral-950 min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Plan Not Found</h1>
                    <Link href="/subscription" className="text-gold hover:underline">View All Plans</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <Link href="/subscription" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
                    <ArrowLeft size={16} /> Back to Plans
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Visual Side */}
                    <div className="relative">
                        <div className="aspect-square bg-neutral-900 rounded-sm overflow-hidden mb-8 relative group">
                            <NextImage
                                src={plan.image}
                                alt={plan.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/10 z-10" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <Package className="text-gold mb-3" size={24} />
                                <h4 className="text-white font-bold text-sm uppercase mb-1">Free Shipping</h4>
                                <p className="text-white/40 text-xs">On every delivery</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <Calendar className="text-gold mb-3" size={24} />
                                <h4 className="text-white font-bold text-sm uppercase mb-1">Fresh Roasted</h4>
                                <p className="text-white/40 text-xs">Shipped within 48h</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Side */}
                    <div>
                        <div className="flex flex-col mb-8">
                            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Subscription</span>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">{plan.name}</h1>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-mono text-white">{plan.type === 'gift' ? `From ${plan.price}` : plan.price}</span>
                                <span className="text-white/40 text-sm">/ {plan.frequency}</span>
                            </div>
                        </div>

                        <p className="text-white/70 text-lg leading-relaxed mb-10 border-b border-white/10 pb-10">
                            {plan.longDescription}
                        </p>

                        <div className="mb-10">
                            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-6">What's Included</h3>
                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-white/80">
                                        <div className="bg-gold/20 p-1 rounded-full">
                                            <Check size={12} className="text-gold" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gift Specific Options */}
                        {plan.type === 'gift' && (
                            <div className="mb-10 p-6 bg-white/5 border border-white/10 rounded-sm">
                                <h3 className="text-white font-bold uppercase tracking-wide text-xs mb-4">Select Duration</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {[3, 6, 12].map((months) => (
                                        <button
                                            key={months}
                                            onClick={() => setGiftDuration(months)}
                                            className={`py-3 px-2 text-center text-sm font-bold border transition-colors ${giftDuration === months
                                                ? 'bg-gold text-black border-gold'
                                                : 'text-white border-white/20 hover:border-white'
                                                }`}
                                        >
                                            {months} Months
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-4 text-right">
                                    <span className="text-white/60 text-xs">Total: </span>
                                    <span className="text-white font-bold text-lg">${giftDuration * 24}</span>
                                </div>
                            </div>
                        )}

                        <button className="w-full bg-white text-black font-bold py-5 uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 flex items-center justify-center gap-3">
                            {plan.type === 'gift' ? <Gift size={20} /> : <CreditCard size={20} />}
                            {plan.type === 'gift' ? 'Purchase Gift' : 'Subscribe Now'}
                        </button>

                        <p className="text-center text-white/30 text-xs mt-4">
                            {plan.type === 'gift' ? 'One-time payment. Does not auto-renew.' : 'Pause or cancel anytime. No questions asked.'}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

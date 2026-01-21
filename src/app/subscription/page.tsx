"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Package, Calendar, Gift } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "PERSONAL",
        price: "$24",
        frequency: "Monthly",
        description: "Perfect for the daily drinker. 2 bags of our roaster's choice.",
        features: ["2x 12oz Bags", "Roaster's Choice", "Free Shipping", "Cancel Anytime"],
        highlight: false
    },
    {
        name: "OBSESSED",
        price: "$44",
        frequency: "Monthly",
        description: "For those who never want to run out. 4 bags of premium selection.",
        features: ["4x 12oz Bags", "Full Access to Reserves", "Priority Shipping", "First Access to Drops"],
        highlight: true
    },
    {
        name: "OFFICE",
        price: "$120",
        frequency: "Monthly",
        description: "Keep the team fueled. 5lb bulk bag for high volume.",
        features: ["5lb Bulk Bag", "Weekly Delivery Options", "Equipment support", "Account Manager"],
        highlight: false
    }
];

export default function SubscriptionPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            {/* Hero Section */}
            <section className="relative px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block">The Club</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                            NEVER RUN<br />DRY.
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                            Join the Lumière subscription program. Freshly roasted coffee delivered to your door on your schedule.
                        </p>
                        <div className="flex gap-8 text-sm">
                            <div className="flex gap-3 items-center text-white">
                                <span className="bg-gold/20 p-2 rounded-full text-gold"><Calendar size={16} /></span>
                                <div>
                                    <p className="font-bold">Flexible Schedule</p>
                                    <p className="text-white/40 text-xs">Weekly, Bi-weekly, Monthly</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center text-white">
                                <span className="bg-gold/20 p-2 rounded-full text-gold"><Package size={16} /></span>
                                <div>
                                    <p className="font-bold">Free Shipping</p>
                                    <p className="text-white/40 text-xs">On all subscription orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden group">
                        <img
                            src="/images/subscription-hero.png"
                            alt="Subscription Box"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`p-8 border ${plan.highlight ? 'border-gold bg-fold/5' : 'border-white/10 bg-neutral-900/50'} relative group hover:border-gold transition-colors`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 left-8 bg-gold text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black text-white">{plan.price}</span>
                                <span className="text-white/40 text-sm">/ {plan.frequency}</span>
                            </div>
                            <p className="text-white/60 text-sm min-h-[3rem] mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-white/80">
                                        <Check size={14} className="text-gold" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${plan.highlight ? 'bg-gold text-black hover:bg-white' : 'bg-white text-black hover:bg-gold'}`}>
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gift Section */}
            <section className="bg-white text-black py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black tracking-tighter mb-6">GIVE THE GIFT OF CAFFEINE.</h2>
                        <p className="text-neutral-600 text-lg mb-8">
                            The perfect gift for the coffee snob in your life. Prepaid subscriptions available for 3, 6, or 12 months.
                        </p>
                        <Link href="/subscription/gift" className="inline-block bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-colors">
                            Shop Gift Subscriptions
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Gift size={200} strokeWidth={1} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

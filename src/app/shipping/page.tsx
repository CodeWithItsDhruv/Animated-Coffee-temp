"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 max-w-3xl mx-auto pb-24 text-white">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">SHIPPING & RETURNS</h1>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Shipping Policy</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            We roast Monday through Thursday. Orders placed by 12 PM EST are typically roasted and shipped the next business day.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            <strong>Standard Shipping:</strong> 3-5 business days via USPS or UPS.<br />
                            <strong>Expedited Shipping:</strong> 2 business days.<br />
                            <strong>Free Shipping:</strong> Available on all subscriptions and orders over $50 within the contiguous US.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">International Shipping</h2>
                        <p className="text-white/70 leading-relaxed">
                            We currently ship to Canada, UK, and select EU countries. International shipping rates are calculated at checkout based on weight and destination. Please note that customers are responsible for any customs duties or taxes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Return Policy</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            <strong>Coffee:</strong> Due to the perishable nature of coffee, we do not accept returns on roasted coffee. However, we want you to be happy. If you are unsatisfied with your coffee, please contact us within 14 days of purchase, and we will find a solution.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            <strong>Merchandise & Equipment:</strong> Unused and unopened non-coffee items may be returned within 30 days of purchase for a full refund. Return shipping costs are the responsibility of the customer unless the item is defective.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Damaged Items</h2>
                        <p className="text-white/70 leading-relaxed">
                            If your order arrives damaged, please snap a photo and email us at support@lumiere.coffee within 48 hours of delivery. We will replace it immediately.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

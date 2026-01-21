"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 max-w-3xl mx-auto pb-24 text-white">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">TERMS OF SERVICE</h1>
                <p className="text-white/40 text-sm mb-12 uppercase tracking-wide">Last Updated: January 2026</p>

                <div className="space-y-12 text-white/70 leading-relaxed">
                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Lumière Coffee (“we,” “us” or “our”), concerning your access to and use of the Lumière website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">2. User Representations</h2>
                        <p>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">3. Products & Purchases</h2>
                        <p>
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">4. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of the State of New York. Lumière Coffee and yourself irrevocably consent that the courts of New York shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

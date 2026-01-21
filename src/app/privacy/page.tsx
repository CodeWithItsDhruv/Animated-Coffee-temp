"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="bg-neutral-950 min-h-screen pt-32">
            <Header className="bg-black/50 backdrop-blur-md" />

            <section className="px-6 max-w-3xl mx-auto pb-24 text-white">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">PRIVACY POLICY</h1>
                <p className="text-white/40 text-sm mb-12 uppercase tracking-wide">Last Updated: January 2026</p>

                <div className="space-y-12 text-white/70 leading-relaxed">
                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">1. Overview</h2>
                        <p>
                            Lumière Coffee ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">2. Data We Collect</h2>
                        <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely by our payment providers).</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-white">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import Link from "next/link";

export default function CTABanner() {
    return (
        <section className="py-32 relative z-10 w-full bg-white text-black overflow-hidden relative">
            {/* Background Texture or Video placeholder */}
            <div className="absolute inset-0 bg-neutral-200 opacity-20"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 transform scale-y-90">
                    NEVER RUN OUT
                </h2>
                <p className="text-xl md:text-2xl font-light mb-10 max-w-xl mx-auto leading-relaxed">
                    Subscribe to the master collection. Save 20% on every order. Cancel anytime.
                </p>
                <Link
                    href="/subscription"
                    className="inline-block bg-black text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all transform hover:scale-105"
                >
                    Start Subscription
                </Link>
            </div>
        </section>
    );
}

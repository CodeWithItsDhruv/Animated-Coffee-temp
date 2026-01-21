import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function StoryTeaser() {
    return (
        <section className="py-24 border-y border-white/5 bg-neutral-950/30 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Our Origins</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 leading-none">
                        OBSESSED WITH<br />THE PROCESS.
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg font-light">
                        We don't just roast coffee; we curate experiences. From the volcanic soils of Ethiopia to the high-altitude peaks of Colombia, we chase the perfect bean. No compromises, no shortcuts—just pure, unadulterated flavor density.
                    </p>
                    <Link href="/about" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-sm group">
                        Read Our Story
                        <span className="p-1 bg-white/10 rounded-full group-hover:bg-gold group-hover:text-black transition-colors">
                            <ArrowRight size={14} />
                        </span>
                    </Link>
                </div>

                {/* Visual - Using CSS grid for an "architectural" image layout since we don't have assets yet */}
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                    <div className="bg-neutral-900 aspect-[3/4] rounded-sm overflow-hidden relative">
                        <Image src="/images/story-origin.png" alt="Origin" fill className="object-cover opacity-80" sizes="(max-width: 1024px) 50vw, 25vw" />
                    </div>
                    <div className="bg-neutral-800 aspect-[3/4] rounded-sm overflow-hidden relative mt-12">
                        <Image src="/images/story-roasting.png" alt="Process" fill className="object-cover opacity-80" sizes="(max-width: 1024px) 50vw, 25vw" />
                    </div>
                </div>
            </div>
        </section>
    );
}

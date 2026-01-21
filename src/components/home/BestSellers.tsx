import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

// Placeholder data - in a real app this comes from a CMS/API
const products = [
    {
        id: 1,
        name: "Noir Roast",
        price: 24,
        notes: "Dark Chocolate, Smoke, Molasses",
        image: "/images/product-noir.png"
    },
    {
        id: 2,
        name: "Gold Blend",
        price: 22,
        notes: "Honey, Citrus, Jasmine",
        image: "/images/product-gold.png"
    },
    {
        id: 3,
        name: "Espresso Reserve",
        price: 26,
        notes: "Caramel, Hazelnut, Cream",
        image: "/images/product-reserve.png"
    }
];

export default function BestSellers() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-black text-white tracking-tight mb-2">CURATED SELECTION</h2>
                        <p className="text-white/40 text-sm tracking-widest uppercase">Our master roaster's monthly favorites</p>
                    </div>
                    <Link href="/shop" className="hidden md:inline-block text-gold text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors border-b border-gold hover:border-white pb-1">
                        View Full Menu
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div key={p.id} className="group relative">
                            <div className="aspect-[4/5] bg-neutral-900 w-full relative overflow-hidden mb-6">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                                    <button className="w-full bg-white text-black py-4 font-bold uppercase text-xs tracking-widest hover:bg-gold transition-colors">
                                        Add to Cart — ${p.price}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
                                    <p className="text-white/50 text-xs">{p.notes}</p>
                                </div>
                                <span className="text-white font-mono">${p.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/shop" className="text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-white pb-1">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}

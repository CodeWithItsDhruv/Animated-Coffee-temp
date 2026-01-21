import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white/60 border-t border-white/5 pt-20 pb-10 font-sans">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div>
                    <h4 className="text-white text-2xl font-black tracking-tighter mb-6">LUMIÈRE</h4>
                    <p className="text-sm leading-relaxed mb-6">
                        Redefining the art of coffee. Ethically sourced, precision roasted, and cinematographically brewed for the modern connoisseur.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Shop */}
                <div>
                    <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Shop</h5>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/shop" className="hover:text-gold transition-colors">All Coffee</Link></li>
                        <li><Link href="/subscription" className="hover:text-gold transition-colors">Subscriptions</Link></li>
                        <li><Link href="/shop/equipment" className="hover:text-gold transition-colors">Equipment</Link></li>
                        <li><Link href="/shop/merch" className="hover:text-gold transition-colors">Merchandise</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Support</h5>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                        <li><Link href="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        <li><Link href="/wholesale" className="hover:text-gold transition-colors">Wholesale</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h5>
                    <p className="text-sm mb-4">Join 20,000+ coffee enthusiasts. Get 10% off your first order.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="ENTER EMAIL"
                            className="bg-white/5 border border-white/10 px-4 py-3 text-sm flex-grow focus:outline-none focus:border-gold text-white placeholder-white/30"
                        />
                        <button className="bg-gold text-black px-4 py-3 text-sm font-bold uppercase hover:bg-white transition-colors">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} Lumière Coffee. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                </div>
            </div>
        </footer>
    );
}

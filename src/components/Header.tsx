"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Fixed Navbar */}
            <div className={cn("fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 hidden md:block", className)}>
                <Menu setActive={setActive}>
                    <Link href="/" className="mr-8 flex items-center">
                        <span className="text-xl font-black text-white tracking-tighter">LUMIÈRE</span>
                    </Link>

                    <MenuItem setActive={setActive} active={active} item="Shop">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[500px]">
                            <ProductItem
                                title="Noir Roast"
                                href="/shop/noir"
                                src="/images/product-noir.png"
                                description="Dark Chocolate, Smoke, Molasses. For the bold."
                            />
                            <ProductItem
                                title="Gold Blend"
                                href="/shop/gold"
                                src="/images/product-gold.png"
                                description="Honey, Citrus, Jasmine. A complex daily driver."
                            />
                            <ProductItem
                                title="Equipment"
                                href="/shop/equipment"
                                src="/images/product-reserve.png"
                                description="Professional grade brewing gear for home."
                            />
                            <ProductItem
                                title="Merch"
                                href="/shop/merch"
                                src="/images/image-sequence-1.png"
                                description="Apparel and accessories."
                            />
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="Subscription">
                        <div className="flex flex-col space-y-4 text-sm w-[200px]">
                            <HoveredLink href="/subscription/personal">Personal Plan</HoveredLink>
                            <HoveredLink href="/subscription/office">For Offices</HoveredLink>
                            <HoveredLink href="/subscription/gift">Gift a Subscription</HoveredLink>
                            <div className="border-t border-white/10 pt-4 mt-2">
                                <p className="text-gold text-xs uppercase font-bold mb-2">Why Subscribe?</p>
                                <p className="text-white/40 text-xs">Save 20% on every order. Cancel anytime. Free shipping.</p>
                            </div>
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="About">
                        <div className="flex flex-col space-y-4 text-sm w-[200px]">
                            <HoveredLink href="/about">Our Story</HoveredLink>
                            <HoveredLink href="/guides">Brew Guides</HoveredLink>
                            <HoveredLink href="/sustainability">Sustainability</HoveredLink>
                            <HoveredLink href="/contact">Contact Us</HoveredLink>
                        </div>
                    </MenuItem>

                    <Link href="/book-table" className="cursor-pointer text-black bg-white hover:bg-gold transition-colors font-bold tracking-[0.1em] text-xs uppercase self-center px-5 py-2 rounded-full flex items-center justify-center">
                        Book Table
                    </Link>

                    {/* Icons built directly into the flow */}
                    <div className="ml-8 flex items-center gap-6 text-white/80">
                        <button className="hover:text-gold transition-colors"><Search size={18} /></button>
                        <Link href="/admin" className="hover:text-gold transition-colors" title="Admin Portal"><User size={18} /></Link>
                        <button className="relative hover:text-gold transition-colors">
                            <ShoppingBag size={18} />
                            <span className="absolute -top-1 -right-1 bg-gold text-black text-[9px] font-bold h-3 w-3 rounded-full flex items-center justify-center">0</span>
                        </button>
                    </div>
                </Menu>
            </div>

            {/* Mobile Header (Simplified) */}
            <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center md:hidden bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <Link href="/" className="text-xl font-black text-white tracking-tighter pointer-events-auto">LUMIÈRE</Link>
                <button className="text-white pointer-events-auto" onClick={() => setIsMobileMenuOpen(true)}>
                    <MenuIcon size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <nav className="flex flex-col items-center gap-8 text-2xl font-light tracking-widest text-white uppercase">
                            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                            <Link href="/subscription" onClick={() => setIsMobileMenuOpen(false)}>Subscription</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link href="/book-table" onClick={() => setIsMobileMenuOpen(false)}>Book Table</Link>
                            <Link href="/guides" onClick={() => setIsMobileMenuOpen(false)}>Guides</Link>
                            <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-gold">Admin Portal</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

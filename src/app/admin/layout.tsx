"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Coffee, Calendar, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
        { icon: Coffee, label: "Products (CMS)", href: "/admin/products" },
        { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    ];

    return (
        <div className="flex h-screen bg-neutral-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-black flex flex-col">
                <div className="p-8">
                    <span className="text-xl font-black tracking-tighter text-white">LUMIÈRE</span>
                    <span className="block text-xs text-gold font-bold tracking-[0.2em] mt-1">ADMIN PORTAL</span>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-white/10 text-gold"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <Icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/40 hover:text-red-400 transition-colors">
                        <LogOut size={18} />
                        Exit Application
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}

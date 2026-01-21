"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { DollarSign, Coffee, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    const { products, bookings } = useApp();

    const stats = [
        { label: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12%" },
        { label: "Active Products", value: products.length, icon: Coffee, change: "0" },
        { label: "Pending Bookings", value: bookings.filter(b => b.status === "pending").length, icon: Users, change: "+5" },
        { label: "Site Visitors", value: "8.5k", icon: TrendingUp, change: "+24%" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/40 mb-12">Overview of your store performance.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                                <stat.icon size={20} />
                            </div>
                            <span className="text-emerald-400 text-xs font-bold">{stat.change}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">JD</div>
                                <div>
                                    <p className="text-white text-sm"><span className="font-bold">John Doe</span> placed an order.</p>
                                    <p className="text-white/30 text-xs">2 minutes ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-white mb-6">Inventory Alerts</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <p className="text-red-200 text-sm">Coffee Beans (Ethiopia) are running low.</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <p className="text-yellow-200 text-sm">Restock required for "Brewing Kit" packaging.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

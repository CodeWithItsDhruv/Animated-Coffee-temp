"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Check, X, Clock, Calendar } from "lucide-react";

export default function AdminBookingsPage() {
    const { bookings, updateBookingStatus } = useApp();

    return (
        <div>
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-white mb-2">Bookings</h1>
                <p className="text-white/40">Manage cafe table reservations.</p>
            </div>

            {bookings.length === 0 ? (
                <div className="bg-white/5 border border-white/5 rounded-2xl p-12 text-center">
                    <p className="text-white/40">No bookings have been made yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-xl font-bold text-white">{booking.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${booking.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400' :
                                            booking.status === 'cancelled' ? 'bg-red-500/10 text-red-400' :
                                                'bg-yellow-500/10 text-yellow-400'
                                        }`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <div className="flex gap-6 text-white/50 text-sm">
                                    <span className="flex items-center gap-2"><Calendar size={14} /> {booking.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={14} /> {booking.time}</span>
                                    <span>{booking.guests} Guests</span>
                                    <span>{booking.email}</span>
                                </div>
                            </div>

                            {booking.status === 'pending' && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                        className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
                                        title="Confirm"
                                    >
                                        <Check size={20} />
                                    </button>
                                    <button
                                        onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                        className="p-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                        title="Cancel"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

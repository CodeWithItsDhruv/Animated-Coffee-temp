"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Types
export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    notes: string;
    image: string;
    description: string;
    category: string;
}

export interface Booking {
    id: string;
    name: string;
    email: string;
    date: string;
    time: string;
    guests: number;
    status: 'pending' | 'confirmed' | 'cancelled';
}

interface AppContextType {
    products: Product[];
    bookings: Booking[];
    addProduct: (product: Omit<Product, "id">) => void;
    deleteProduct: (id: number) => void;
    addBooking: (booking: Omit<Booking, "id" | "status">) => void;
    updateBookingStatus: (id: string, status: Booking['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Noir Roast",
        slug: "noir",
        price: 24,
        notes: "Dark Chocolate, Smoke, Molasses",
        image: "/images/product-noir.png",
        description: "Our signature dark roast. Bold, intense, and smoky.",
        category: "coffee"
    },
    {
        id: 2,
        name: "Gold Blend",
        slug: "gold",
        price: 22,
        notes: "Honey, Citrus, Jasmine",
        image: "/images/product-gold.png",
        description: "A bright and complex light roast perfect for pour-over.",
        category: "coffee"
    },
    {
        id: 3,
        name: "Espresso Reserve",
        slug: "reserve",
        price: 26,
        notes: "Caramel, Hazelnut, Cream",
        image: "/images/product-reserve.png",
        description: "Smooth and creamy espresso blend.",
        category: "coffee"
    },
    {
        id: 4,
        name: "Brewing Kit",
        slug: "equipment",
        price: 85,
        notes: "Professional Grade",
        image: "/images/product-reserve.png", // Reuse for now
        description: "Everything you need to brew perfect coffee at home.",
        category: "equipment"
    },
    {
        id: 5,
        name: "Lumière Tee",
        slug: "merch",
        price: 35,
        notes: "100% Cotton",
        image: "/images/image-sequence-1.png",
        description: "Minimalist brand merchandise.",
        category: "merch"
    }
];

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
    const [bookings, setBookings] = useState<Booking[]>([]);

    const addProduct = (product: Omit<Product, "id">) => {
        const newProduct = {
            ...product,
            id: Math.max(...products.map(p => p.id), 0) + 1
        };
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const addBooking = (bookingData: Omit<Booking, "id" | "status">) => {
        const newBooking: Booking = {
            ...bookingData,
            id: Math.random().toString(36).substr(2, 9),
            status: 'pending'
        };
        setBookings([...bookings, newBooking]);
    };

    const updateBookingStatus = (id: string, status: Booking['status']) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    };

    return (
        <AppContext.Provider value={{ products, bookings, addProduct, deleteProduct, addBooking, updateBookingStatus }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}

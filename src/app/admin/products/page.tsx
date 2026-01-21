"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Plus, Trash, Image as ImageIcon } from "lucide-react";

export default function AdminProductsPage() {
    const { products, addProduct, deleteProduct } = useApp();
    const [isAdding, setIsAdding] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        notes: "",
        category: "coffee",
        description: "",
        image: "/images/product-noir.png" // Default
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct({
            ...newProduct,
            slug: newProduct.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
        });
        setIsAdding(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Product Management</h1>
                    <p className="text-white/40">Add, edit, or remove store inventory.</p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="bg-gold text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
                >
                    <Plus size={16} /> Add Product
                </button>
            </div>

            {isAdding && (
                <div className="bg-white/5 border border-white/5 p-8 rounded-2xl mb-12 animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-xl font-bold text-white mb-6">New Product</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <input
                                className="w-full bg-black/20 text-white border border-white/10 rounded-lg px-4 py-3"
                                placeholder="Product Name"
                                value={newProduct.name}
                                onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                                required
                            />
                            <input
                                type="number"
                                className="w-full bg-black/20 text-white border border-white/10 rounded-lg px-4 py-3"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={e => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                                required
                            />
                            <select
                                className="w-full bg-black/20 text-white border border-white/10 rounded-lg px-4 py-3"
                                value={newProduct.category}
                                onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                            >
                                <option value="coffee">Coffee Beans</option>
                                <option value="equipment">Equipment</option>
                                <option value="merch">Merchandise</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <input
                                className="w-full bg-black/20 text-white border border-white/10 rounded-lg px-4 py-3"
                                placeholder="Flavor Notes (e.g. Chocolate, Nutty)"
                                value={newProduct.notes}
                                onChange={e => setNewProduct({ ...newProduct, notes: e.target.value })}
                                required
                            />
                            <textarea
                                className="w-full bg-black/20 text-white border border-white/10 rounded-lg px-4 py-3 h-32 resize-none"
                                placeholder="Description"
                                value={newProduct.description}
                                onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-span-2 flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setIsAdding(false)}
                                className="px-6 py-3 text-white/60 hover:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-500"
                            >
                                Save Product
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden group">
                        <div className="h-48 bg-neutral-800 relative">
                            <img src={product.image} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                            <button
                                onClick={() => deleteProduct(product.id)}
                                className="absolute top-4 right-4 bg-red-500/10 text-red-400 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                            >
                                <Trash size={16} />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                                <span className="font-mono text-gold">${product.price}</span>
                            </div>
                            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">{product.category}</p>
                            <p className="text-white/60 text-sm line-clamp-2">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

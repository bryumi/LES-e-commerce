// src/contexts/CartContext.tsx
'use client'; // necessário no Next.js App Router

import { IBooks } from '@/data/mockItems';
import handleError from '@/utils/handleToast';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem extends IBooks {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (book: IBooks) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    total: number;
    applyCoupon: (code: string) => void;
    coupon: Coupon | null;
    discount: number;
}
const initialData = [
    {
        id: 1,
        bookName: 'Menina Má',
        description:
            'Clássico de William March — nascimento da inocência corrompida.',
        price: 64.9,
        images: ['/images/books/badSeed.jpeg'],
        author: 'William March',
        publisher: 'DarkSide Books',
        year: 2016,
    },
    {
        id: 2,
        bookName: 'Drácula - First Edition + Brinde Exclusivo',
        description: 'Edição limitada de Bram Stoker com estaca de caçador.',
        price: 93.42,
        images: ['/images/books/dracula.jpeg'],
        author: 'Bram Stoker',
        publisher: 'Madras Editora',
        year: 2020,
    },
];
interface Coupon {
    code: string;
    discountPercentage: number; // desconto em %
}
const validCoupons: Coupon[] = [
    { code: 'DESCONTO10', discountPercentage: 10 },
    { code: 'DESCONTO20', discountPercentage: 20 },
];
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [coupon, setCoupon] = useState<Coupon | null>(null);
    const [discount, setDiscount] = useState(0);
    const [cart, setCart] = useState<CartItem[]>(
        initialData.map(item => ({ ...item, quantity: 1 })),
    );

    const addToCart = (book: IBooks) => {
        setCart(prev =>
            prev.some(item => item.id === book.id)
                ? prev.map(item =>
                      item.id === book.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                  )
                : [...prev, { ...book, quantity: 1 }],
        );
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const increaseQuantity = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item,
            ),
        );
    };

    const applyCoupon = (code: string) => {
        const found = validCoupons.find(c => c.code === code.toUpperCase());
        if (found) {
            setCoupon(found);
            setDiscount(found.discountPercentage);
        } else {
            setCoupon(null);
            handleError('Cupom inválido');
        }
    };

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const discountValue = coupon
        ? subtotal * (coupon.discountPercentage / 100)
        : 0;

    const total = subtotal - discountValue;

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                applyCoupon,
                total,
                discount,
                coupon,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// hook para usar facilmente no projeto
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error('useCart deve ser usado dentro de CartProvider');
    return context;
};

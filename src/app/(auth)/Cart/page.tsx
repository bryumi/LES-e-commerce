'use client';
import Image from 'next/image';
import {
    Container,
    checkoutButton,
    returnButton,
    total,
    ContainerRow,
} from './styles';
import CartItem from '@/components/CartItem/CartItem';
import React from 'react';

interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    image: string;
    quantity: number;
}

const initialCart: Book[] = [
    {
        id: '1',
        title: 'Se Você Contar',
        author: 'Autor 1',
        price: 69.9,
        image: 'images/books/seVoceContar.jpeg',
        quantity: 1,
    },
    {
        id: '2',
        title: 'O Médico e o Monstro',
        author: 'Autor 2',
        price: 79.9,
        image: 'images/books/medicoMonstro.jpeg',
        quantity: 1,
    },
];

const Cart: React.FC = () => {
    const [cart, setCart] = React.useState<Book[]>(initialCart);
    const handleRemove = (id: string) => {
        setCart(cart.filter(item => item.id !== id));
    };
    const handleQuantityChange = (id: string, newQuantity: number) => {
        setCart(
            cart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item,
            ),
        );
    };

    const cartTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    return (
        <div className={Container}>
            <h1>Carrinho</h1>
            {cart.length === 0 ? (
                <p>O carrinho está vazio</p>
            ) : (
                <>
                    <div className={ContainerRow}>
                        {cart.map(book => (
                            <CartItem
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                                quantity={book.quantity}
                                image={book.image}
                                onRemove={() => handleRemove(book.id)}
                                onQuantityChange={(newQuantity: number) =>
                                    handleQuantityChange(book.id, newQuantity)
                                }
                            />
                        ))}
                    </div>
                    <div className={total}>
                        <p>Total: R$ {cartTotal.toFixed(2)}</p>
                    </div>
                    <div className={ContainerRow}>
                        <button className={returnButton}>
                            Continuar Comprando
                        </button>
                        <button className={checkoutButton}>
                            Finalizar Compra
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
export default Cart;

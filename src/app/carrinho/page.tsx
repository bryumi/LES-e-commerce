'use client';
import Image from 'next/image';
import { ButtonsWrapper, Container, ContainerRow, Total } from './styles';
import CartItem from '@/components/CartItem/CartItem';
import React, { useState } from 'react';
import StyledButton from '@/components/StyledButton/StyledButton';
import { theme } from '@/styles/theme';
import ModalNotification from '@/components/ModalNotification/ModalNotification';
import { useRouter } from 'next/navigation';
import ModalLogin from '@/components/ModalLogin/ModalLogin';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/components/context/useCart';
import { currencyMask } from '@/utils/masks';
import InputText from '@/components/InputText/InputText';

const Cart: React.FC = () => {
    const {
        cart,
        total,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        applyCoupon,
    } = useCart();
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    const [couponValue, setCouponValue] = useState<string>('');
    const { user } = useAuth();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.target.value.trim();
        if (currentValue.length !== 0) {
            setCouponValue(currentValue);
        }
    };
    return (
        <>
            {modalState === 'chooseLogin' && (
                <ModalNotification
                    title="Atenção!"
                    text="Você precisa estar logado para continuar."
                    onClose={() => router.push('/cadastro')}
                    closeText="Cadastrar"
                    confirmText="Entrar"
                    onConfirm={() => {
                        setModalState('login');
                    }}
                    border={`1px solid ${theme.colors.primary100}`}
                    color="primary100"
                />
            )}
            {modalState === 'login' && (
                <ModalLogin
                    onConfirm={() => {
                        setModalState(undefined);
                        // Handle login confirmation
                    }}
                    onClose={() => setModalState(undefined)}
                />
            )}
            <HeaderAuth />
            <Container>
                <h1>Carrinho</h1>
                {cart.length === 0 ? (
                    <p>O carrinho está vazio</p>
                ) : (
                    <>
                        <ContainerRow>
                            {cart.map(book => (
                                <CartItem
                                    key={book.id}
                                    title={book.bookName}
                                    author={book.author}
                                    price={book.price}
                                    quantity={book.quantity}
                                    image={book.images[0]}
                                    onRemove={() => removeFromCart(book.id)}
                                    onQuantityChange={(newQuantity: number) => {
                                        if (newQuantity > book.quantity) {
                                            increaseQuantity(book.id);
                                        } else {
                                            decreaseQuantity(book.id);
                                        }
                                    }}
                                />
                            ))}
                        </ContainerRow>
                        <Total>
                            <p>Total: {currencyMask(total)}</p>
                        </Total>
                        <ContainerRow
                            style={{
                                width: '50%',
                                marginBottom: '4rem',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                            }}
                        >
                            <InputText
                                label="Inserir Cupom de desconto"
                                onChange={handleChange}
                            />
                            <StyledButton
                                text="Aplicar"
                                onClick={() => {
                                    if (couponValue) {
                                        applyCoupon(couponValue);
                                    }
                                }}
                                height="40px"
                                width="100px"
                            />
                        </ContainerRow>

                        <ButtonsWrapper>
                            <StyledButton
                                text="Continuar Comprando"
                                onClick={() => router.push('/')}
                                bgColor="background"
                                textColor="primary100"
                                border={`1px solid ${theme.colors.primary100}`}
                            />
                            <StyledButton
                                onClick={() => {
                                    // if (!user) {
                                    //     setModalState('chooseLogin');
                                    //     console.log('Finalizar Compra');
                                    // } else {
                                    //     router.push('/checkout');
                                    // }
                                    setModalState('chooseLogin');
                                }}
                                text="Finalizar Compra"
                            />
                        </ButtonsWrapper>
                    </>
                )}
            </Container>
        </>
    );
};
export default Cart;

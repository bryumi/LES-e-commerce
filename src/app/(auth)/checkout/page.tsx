'use client';
import CartItem from '@/components/CartItem/CartItem';
import {
    AddressContainer,
    ButtonsWrapper,
    Container,
    ContainerRow,
    PaymentContainer,
} from './styles';
import { useCart } from '@/components/context/useCart';
import CardsComponent from '@/components/CardComponent/CardComponent';
import AddressComponent from '@/components/AddressComponent/AddressComponent';
import { useState } from 'react';
import StyledButton from '@/components/StyledButton/StyledButton';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/navigation';
import { currencyMask } from '@/utils/masks';
import handleError from '@/utils/handleToast';
import Loading from '@/components/Loading/Loading';
import Modal from '@/components/Modal/Modal';
import ModalSuccess from '@/components/ModalSuccess/ModalSuccess';

const CheckoutPage = () => {
    const [selectedCard, setSelectedCard] = useState<string | undefined>(
        undefined,
    );
    const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
        undefined,
    );
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [shippingCost, setShippingCost] = useState<number | undefined>(
        undefined,
    );
    const {
        cart,
        total,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        coupon,
        discount,
        clearCart,
    } = useCart();
    const router = useRouter();
    const handleCardSelection = (cardId: string) => {
        if (selectedCard === cardId) {
            setSelectedCard(undefined);
            return;
        }
        setSelectedCard(cardId);
    };
    const handleAddressSelection = (addressId: string) => {
        if (selectedAddress === addressId) {
            setSelectedAddress(undefined);
            return;
        }
        if (addressId === '0') {
            setShippingCost(5.89);
        } else {
            setShippingCost(10.56);
        }
        setSelectedAddress(addressId);
    };

    const handleShop = () => {
        if (!selectedCard) {
            handleError('Por favor, selecione um cartão.');
            return;
        }
        if (!selectedAddress) {
            handleError('Por favor, selecione um endereço.');
            return;
        }
        setLoading(true);
        setSuccess(false);

        // simula envio de dados (espera 2 segundos)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };
    return (
        <>
            {loading && (
                <Modal>
                    <Loading description="Processando pagamento..." />
                </Modal>
            )}
            {success && (
                <ModalSuccess
                    title="Sucesso!"
                    textNormal="Obrigado por sua compra!"
                    onConfirm={() => {
                        clearCart();
                        router.push('/');
                    }}
                    confirmText="Voltar para a loja"
                />
            )}
            <Container>
                <h4>Checkout</h4>
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
                <PaymentContainer>
                    <h4>Pagamento Total: {currencyMask(total)}</h4>
                    {coupon && (
                        <h4>
                            Cupom de desconto: {coupon.code}, {discount}%
                        </h4>
                    )}
                    <h4>Escolha um cartão</h4>
                    <CardsComponent
                        onSelected={() => handleCardSelection('0')}
                        checked={selectedCard === '0'}
                        isCheckout
                    />
                    <CardsComponent
                        onSelected={() => handleCardSelection('1')}
                        checked={selectedCard === '1'}
                        isCheckout
                    />
                </PaymentContainer>
                <AddressContainer>
                    <h4>Endereço de Entrega</h4>
                    <AddressComponent
                        isCheckout
                        checked={selectedAddress === '0'}
                        onSelected={() => handleAddressSelection('0')}
                    />
                    <AddressComponent
                        isCheckout
                        checked={selectedAddress === '1'}
                        onSelected={() => handleAddressSelection('1')}
                    />
                    {shippingCost !== undefined && (
                        <h4>Frete: {currencyMask(shippingCost)}</h4>
                    )}
                    {selectedAddress && (
                        <h4>
                            Total: {currencyMask(total + (shippingCost || 0))}
                        </h4>
                    )}
                </AddressContainer>
                <ButtonsWrapper>
                    <StyledButton
                        textColor="primary100"
                        bgColor="background"
                        border={`1px solid ${theme.colors.primary100}`}
                        text="Voltar para as compras"
                        onClick={() => router.push('/')}
                    />
                    <StyledButton text="Concluir Compra" onClick={handleShop} />
                </ButtonsWrapper>
            </Container>
        </>
    );
};

export default CheckoutPage;

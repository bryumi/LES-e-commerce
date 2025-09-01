'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import mockItemsBooks from '@/data/mockItems';
import {
    Container,
    BookTitle,
    BookDescription,
    BookPrice,
    ButtonGroup,
    ImageContainer,
    ContainerDescription,
    ContainerPage,
} from './styles';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import { useCart } from '@/components/context/useCart';
import StyledButton from '@/components/StyledButton/StyledButton';
import { theme } from '@/styles/theme';
import { handleSuccess } from '@/utils/handleToast';

interface Props {
    params: { id: string };
}

export default function ProductPage({ params }: Props) {
    const router = useRouter();
    const book = mockItemsBooks.find(b => b.id === Number(params.id));
    const { addToCart } = useCart();

    if (!book) return <p>Livro não encontrado</p>;

    return (
        <>
            <HeaderAuth />
            <ContainerPage>
                <ContainerDescription>
                    <ImageContainer>
                        {book.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={book.bookName}
                                width={300}
                                height={450}
                            />
                        ))}
                    </ImageContainer>
                    <Container>
                        <BookTitle>{book.bookName}</BookTitle>
                        <BookDescription>{book.description}</BookDescription>
                        <BookDescription>Autor: {book.author}</BookDescription>
                        <BookDescription>
                            Editora: {book.publisher}
                        </BookDescription>
                        <BookDescription>Ano: {book.year}</BookDescription>
                        <BookPrice>R$ {book.price.toFixed(2)}</BookPrice>
                    </Container>
                </ContainerDescription>
                <ButtonGroup>
                    <StyledButton
                        onClick={() => router.back()}
                        bgColor="background"
                        fontSize="16px"
                        fontWeight="bold"
                        text="Voltar"
                        textColor="primary100"
                        border={`1px solid ${theme.colors.primary100}`}
                    />
                    <StyledButton
                        onClick={() => {
                            addToCart(book);
                            handleSuccess('Produto adicionado com sucesso');
                        }}
                        bgColor="background"
                        fontSize="16px"
                        fontWeight="bold"
                        text="Colocar no carrinho"
                        textColor="primary100"
                        border={`1px solid ${theme.colors.primary100}`}
                    />
                </ButtonGroup>
            </ContainerPage>
        </>
    );
}

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
    Button,
    ImageContainer,
    ContainerDescription,
    ContainerPage,
} from './styles';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import { useCart } from '@/components/context/useCart';

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
                    <Button onClick={() => router.back()} variant="secondary">
                        Voltar
                    </Button>
                    <Button onClick={() => addToCart(book)}>
                        Colocar no carrinho
                    </Button>
                </ButtonGroup>
            </ContainerPage>
        </>
    );
}

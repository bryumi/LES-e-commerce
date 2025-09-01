import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    CardContainer,
    CarDetails,
    CarImage,
    CarPrice,
    CarTitle,
    ImageCarousel,
    InfoContainer,
} from './styles';
import { useRouter } from 'next/navigation';
import { IBooks } from '@/data/mockItems';

interface CardItemProps {
    car: IBooks;
}
const CardItem = ({ car }: CardItemProps) => {
    const router = useRouter();
    return (
        <CardContainer onClick={() => router.push(`/produtos/${car.id}`)}>
            <ImageCarousel>
                <CarImage src={car.images[0]} alt={car.description} />
            </ImageCarousel>
            <InfoContainer>
                <CarTitle onClick={() => router.push(`/produtos/${car.id}`)}>
                    {car.bookName}
                </CarTitle>
                <CarDetails>{car.description}</CarDetails>
                <CarPrice>R$ {car.price.toLocaleString()}</CarPrice>
                <CarDetails>{car.author}</CarDetails>
                <CarDetails>{car.publisher}</CarDetails>
                <CarDetails>{car.year}</CarDetails>
            </InfoContainer>
        </CardContainer>
    );
};

export default CardItem;

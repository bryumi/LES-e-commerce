/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonSwiper, Container, SwiperWrapper, Title } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';
import mockItemsBooks from '@/data/mockItems';
import CardItem from '../CardItem/CardItem';

interface ISectionProps {
    title: string;
    img: string;
}
const SectionSwiper = ({ title, img }: ISectionProps) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <Container>
            <Title>
                <img src={img} alt="" />
                <p>{title}</p>
            </Title>
            <SwiperWrapper>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={5}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{ clickable: true }}
                    className="px-4"
                    onInit={swiper => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {mockItemsBooks.map(book => (
                        <SwiperSlide key={book.id}>
                            <CardItem car={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ButtonSwiper ref={prevRef} className="prev">
                    <FaArrowLeft color="#770B8380" />
                </ButtonSwiper>
                <ButtonSwiper ref={nextRef} className="next">
                    <FaArrowRight color="#770B8380" />
                </ButtonSwiper>
            </SwiperWrapper>
        </Container>
    );
};

export default SectionSwiper;

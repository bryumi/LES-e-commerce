'use client';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import ImageSlider from '@/components/ImageSlider/page';
import { Container } from './styles';
import SectionSwiper from '@/components/SectionSwiper/SectionSwiper';

export default function Home() {
    return (
        <>
            <HeaderAuth />
            <Container>
                <ImageSlider
                    images={[
                        '/images/banner1.png',
                        '/images/banner2.jpg',
                        '/images/banner3.jpg',
                    ]}
                />
                <SectionSwiper
                    title="Livros em Destaque"
                    img="/images/book-banner.jpg"
                />
            </Container>
        </>
    );
}

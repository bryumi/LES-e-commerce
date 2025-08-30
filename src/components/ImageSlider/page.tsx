import React, { useEffect, useState } from 'react';
import { Slide, SliderContainer } from './styles';

interface ImageSliderProps {
    images: string[];
    interval?: number; // tempo de transição
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    interval = 3000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <SliderContainer>
            {images.map((img, index) => (
                <Slide
                    key={index}
                    $active={index === currentIndex}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
        </SliderContainer>
    );
};

export default ImageSlider;

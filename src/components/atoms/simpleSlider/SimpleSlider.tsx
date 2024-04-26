import React from 'react';
import Slider from 'react-slick';
import { SimpleSliderProps } from '@/interface';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './SimpleSlider.scss'

export const SimpleSlider: React.FC<SimpleSliderProps> = ({children, customSettings}) => {
  const settings = customSettings ? customSettings : {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className='slider-local'>
      {children}
    </Slider>
  );
};

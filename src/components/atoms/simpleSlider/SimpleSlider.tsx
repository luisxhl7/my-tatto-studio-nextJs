import React, { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.scss'

interface SimpleSliderProps {
  children: ReactNode;
  customSettings?: Settings;
}


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

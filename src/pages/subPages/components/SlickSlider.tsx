import React, {PropsWithChildren, useRef} from 'react';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { generateUtilityClasses } from '@mui/material';

const classes = generateUtilityClasses('SlickSlider', ['sliderContainer']);

interface SlickSliderProps {
  slidesToShow?: number;
  autoplaySpeed?: number;
  autoplay?: boolean;
}

const SlickSlider: React.FC<PropsWithChildren<SlickSliderProps>> = ({children, slidesToShow, autoplaySpeed, autoplay = true}) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow ?? 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    arrows: false,
    autoplaySpeed: autoplaySpeed ?? 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow ?? 3,
          slidesToScroll: slidesToShow ?? 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow ?? 2,
          slidesToScroll: slidesToShow ?? 2,
          initialSlide: slidesToShow ?? 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className={classes.sliderContainer}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;

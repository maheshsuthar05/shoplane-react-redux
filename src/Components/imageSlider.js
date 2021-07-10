import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageSlider.css';
import slide1 from './Images/slide1.png';
import slide2 from './Images/slide2.png';
import slide3 from './Images/slide3.png';
import slide4 from './Images/slide4.png';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 500,
            arrows: true
        }

        return (
            <div className='slider-wrapper'>
                <Slider {...settings}>
                    <div className='card'>
                        <img className='slider-item' src={slide1} />
                    </div>
                    <div className='card'>
                        <img className='slider-item' src={slide2} />
                    </div>
                    <div className='card'>
                        <img className='slider-item' src={slide3} />
                    </div>
                    <div className='card'>
                        <img className='slider-item' src={slide4} />
                    </div>
                </Slider>
            </div >
        );
    }
}


export default ImageSlider;

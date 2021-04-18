import React from 'react';
import "./Carousel.css"
import CarouselCard from './CarouselCard'
import Carousel from 'react-elastic-carousel';
import slide1 from '../../../resources/images/carousel-1.jpg'
import slide2 from '../../../resources/images/carousel-2.jpg'
import slide3 from '../../../resources/images/carousel-3.jpg'
import slide4 from '../../../resources/images/carousel-4.jpg'
import slide5 from '../../../resources/images/carousel-5.jpg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

const CarouselSlider = () => {
    return (
        <div className="carousel-slider">
            <h1 style={{ textAlign: "center", color: "#fff"}}>Here are some of <span style={{color:'orange'}}>best products</span></h1>
            <div className="carousel-card">
                <Carousel breakPoints={breakPoints}>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide1} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide2} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide3} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide4} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide5} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide1} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide2} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide3} alt=""/></CarouselCard>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselSlider;
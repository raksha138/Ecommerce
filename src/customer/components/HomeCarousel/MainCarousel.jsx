import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';




const MainCarousel = () => {

    const items = mainCarouselData.map((item)=> <img className={`flex justify-center items-center p-2`} 
    role='presentation' src={item.image} alt=""/>)

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />

    )

}
export default MainCarousel
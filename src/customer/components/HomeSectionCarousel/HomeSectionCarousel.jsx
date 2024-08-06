// // import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@headlessui/react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import React, { useState } from 'react';
// // import { mens_kurta } from '../../../Data/mens_kurta';


// const HomeSectionCarousel = ({data,sectionName}) => {

//     const [activeIndex, setActiveIndex]=useState(0);

//     const responsive = {
//         0: { items: 1 },
//         720: { items: 3 },
//         1024: { items: 5.5 },

//     };

//     const slidePrev=()=>setActiveIndex(activeIndex-1);
//     const slideNext=()=>setActiveIndex(activeIndex+1);

//     const syncActiveIndex=({item})=>setActiveIndex(item)

//     const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
//     return (
//         <div className=" border ">
//             <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
//             <div className="relative p-5">
//                 <AliceCarousel
//                     items={items}
//                     disableButtonsControls
//                     infinite
//                     responsive={responsive}
//                     disableDotsControls
//                     onSlideChange={syncActiveIndex}
//                     activeIndex={activeIndex}
//                 />

//               { activeIndex !== items.length-5 &&  <Button 
//                 variant="contained" 
//                 className="z-50 bg-white" 
//                 onClick={slideNext}
//                 sx={{
//                     position: 'absolute', 
//                     top: "8rem",
//                     right: "0rem",
//                      transform: "translateX(50%) rotate(90deg)", bgcolor: "white",
//                      }}
//                     aria-label="next" 
//                 >
//                     <KeyboardArrowLeftIcon 
//                     sx={{ transform: "rotate(90deg)",color:"black" }} />
//                 </Button>}

//                { activeIndex!==0 && <Button
//                 onClick={slidePrev}
//                 variant="contained" 
//                 className="z-50 bg-white" 
//                 sx={{
//                     position: 'absolute', 
//                     top: "8rem",
//                     left: "0rem", 
//                     transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white",
//                 }}
//                     aria-label="next" >
//                     <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
//                 </Button> }
//             </div >


//         </div >
//     );
// };


// export default HomeSectionCarousel

import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const carouselRef = useRef(null); // Ref to AliceCarousel component
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border bg-white relative">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />

        {activeIndex !== items.length - 5 && (
          <IconButton
            className="z-50 bg-white"
            onClick={handleNextClick}
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ color: 'black' }} />
          </IconButton>
        )}

        {activeIndex !== 0 && (
          <IconButton
            onClick={handlePrevClick}
            className="z-50 bg-white"
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;




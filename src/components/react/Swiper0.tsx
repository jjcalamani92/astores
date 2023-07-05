import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import '@/src/styles/styles.css'
import "@styles/styles.css";


interface Props {
	images: string[]
}
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export function Swiper0({images}:Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-2 lg:mb-0"
      >
        {
          images.map((image, i) => 
            <SwiperSlide key={i}>
              <img src={image} />
            </SwiperSlide>
          )
        }
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map((image, i) => 
            <SwiperSlide key={i}>
              <img src={image} />
            </SwiperSlide>
          )
        }
        
      </Swiper>
    </>
  );
}

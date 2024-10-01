import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { homePageSliderItems } from "../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      className="w-full xl:h-[450px] md:h-[350px] -z-0"
    >
      {homePageSliderItems.map((item) => (
        <SwiperSlide key={item._id} className="w-screen h-full image_fade">
          <img src={item.img} alt={item.title} className="object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

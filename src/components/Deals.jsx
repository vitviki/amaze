import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { sampleDeals } from "../utils/data";
import { Link } from "react-router-dom";
import ProductCardMini from "./ProductCardMini";

import "swiper/css";
import "swiper/css/navigation";

const Deals = () => {
  return (
    <div className="flex flex-col gap-2 shadow-lg p-5">
      <h2 className="text-xl font-medium">Top Deals</h2>
      <div className="overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={15}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          navigation
        >
          {sampleDeals.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="relative max-w-[300px] sm:w-[300px] w-[250px]"
            >
              <ProductCardMini
                id={item.deal_id}
                photo={item.deal_photo}
                badge={item.deal_badge}
                title={item.deal_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;

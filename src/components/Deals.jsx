import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCardMini from "./ProductCardMini";

import "swiper/css";
import "swiper/css/navigation";

const Deals = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-4 shadow-lg p-5">
      <h2 className="text-xl font-medium">{title}</h2>
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
          {data.map((item, idx) => {
            return (
              <SwiperSlide
                key={item.id + idx}
                className="relative max-w-[300px] sm:w-[300px] w-[250px] min-w-[250px] max-h-[250px]"
              >
                <ProductCardMini
                  id={item.asin}
                  photo={item.photo}
                  badge={item.badge}
                  title={item.title}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;

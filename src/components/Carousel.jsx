import { useEffect, useState } from "react";
import { homePageSliderItems } from "../utils/data";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === homePageSliderItems.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-max  overflow-hidden">
      <div
        className="w-max lg:h-[450px] flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {homePageSliderItems.map((item) => (
          <div key={item._id} className="w-screen h-full image_fade">
            <Link to="/">
              <img src={item.img} alt={item.title} className="object-cover" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

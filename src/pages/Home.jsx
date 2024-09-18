import { Carousel, Deals, ProductCard } from "../components";
import {
  sampleBestSellers,
  sampleDeals,
  sampleCardItems,
  sampleMoreCategories,
} from "../utils/data";

const Home = () => {
  return (
    <div>
      {/*  Slider images */}
      <Carousel />

      <div className="relative mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-72 mb-20 -top-44 flex flex-col gap-10">
        {/* Popular Products */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-x-4 gap-y-5 lg:-top-32">
          {sampleCardItems.map((item) => {
            return (
              <ProductCard
                key={item._id}
                title={item.title}
                link="/"
                images={item.images}
                subTitle={item.subTitle}
              />
            );
          })}
        </div>

        {/* Today's Deals */}
        <Deals data={sampleDeals} title={"Top Deals"} />

        {/* Best seller in apparels */}
        <Deals
          data={sampleBestSellers}
          title={"Best sellers in Clothing & Accessories"}
        />
      </div>

      {/* More categories */}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-x-4 gap-y-5 lg:-top-32">
        {sampleMoreCategories.map((item) => {
          return (
            <ProductCard
              key={item._id}
              title={item.title}
              link="/"
              images={item.images}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

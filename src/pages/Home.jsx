import { Carousel } from "../components";
import { sampleCardItems } from "../utils/data";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="relative mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-72 mb-20 grid grid-cols-4 gap-x-4 gap-y-5 -top-32">
        {sampleCardItems.map((item) => {
          console.log(item);
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

import { Carousel } from "../components";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-44">
        <h2>Featured Products</h2>
      </div>
    </div>
  );
};

export default Home;

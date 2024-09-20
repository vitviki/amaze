import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sampleDeals, sampleBestSellers } from "../utils/data";

const WishlistItem = () => {};

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist } = useSelector((state) => state.user);

  return (
    <div className="w-full h-screen">
      {wishlist.length === 0 ? (
        <div className="w-full h-max flex flex-col items-center gap-10 mt-40 sm:px-0 px-3">
          <h1 className="sm:text-3xl text-2xl text-center">
            You haven't saved anything yet
          </h1>
          <h3 className=" text-center">
            Add your favorites to wishlist and start building your personal
            collection
          </h3>
          <button
            onClick={() => navigate("/")}
            className="min-w-[200px] sm:w-[300px] w-[200px] border py-3 bg-amazon_yellow sm:text-xl text-base shadow-lg"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="w-full h-max flex flex-col gap-10 mt-20 px-10">
          <h2>My wishlist: {wishlist.length} item(s)</h2>
          <div className="w-full grid grid-cols-5 gap-5"></div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

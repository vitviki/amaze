import { Link } from "react-router-dom";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../redux/features/user/userSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ProductCardMini = ({ id, title, photo, badge, price }) => {
  const dispatch = useDispatch();
  const { user, wishlist } = useSelector((state) => state.user);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const addToWishlist = (id) => {
    // Check if the user is logged in or not.
    if (!user) {
      toast.info("Please login to add to wishlist");
      return;
    }

    // Check if the product is already in the wishlist. If yes, remove it.
    let newWishlist = [];
    if (wishlist.includes(id)) {
      newWishlist = wishlist.filter((item) => item !== id);
    } else {
      // Else add to wishlist.
      newWishlist = [...wishlist, id];
    }

    // Update the wisthlist
    dispatch(setWishlist(newWishlist));
  };

  useEffect(() => {
    // Check if the the item is in wishlist.
    if (wishlist.includes(id)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlist]);

  return (
    <div className="group" title={title}>
      {badge && (
        <div className="absolute top-0 left-0 flex items-center px-3 bg-red-500 text-white font-medium md:text-base text-sm">
          <h5>{badge}</h5>
        </div>
      )}
      <div className="absolute top-0 right-0 text-xl hidden group-hover:block">
        <div className="p-2 bg-gray-100 rounded-full">
          {isInWishlist ? (
            <IoMdHeart
              className=" text-red-600 cursor-pointer "
              title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              onClick={() => addToWishlist(id)}
            />
          ) : (
            <IoIosHeartEmpty
              className="text-gray-600 cursor-pointer "
              title="Add to wishlist"
              onClick={() => addToWishlist(id)}
            />
          )}
        </div>
      </div>
      <Link className="md:mt-3 mt-2 h-full" to={`/products/${id}`}>
        <img src={photo} alt={title} className="object-fit" />
      </Link>
      <h3 className="md:text-sm text-xs mt-2 font-medium truncate ...">
        {title}
      </h3>
      {price && (
        <p className="text-center text-base text-gray-900 mt-2">{price}</p>
      )}
    </div>
  );
};

export default ProductCardMini;

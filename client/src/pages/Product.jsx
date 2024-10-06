import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetDataQuery,
  useGetProductDetailsQuery,
} from "../redux/api/amazonCore";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { calculateDiscountPercentage } from "../utils/utils";
import ProductCardMini from "../components/ProductCardMini";
import { setWishlist, setCart } from "../redux/features/user/userSlice";

const RelatedProducts = ({ name }) => {
  const { data: relatedProductsData, isFetching } = useGetDataQuery(name);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading....</div>;
  }

  return relatedProductsData?.data.products.length > 0 ? (
    <div className="mt-24 mb-14">
      <div className="text-center text-3xl py-2">
        <h2 className="text-3xl mb-5">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 items-center">
          {relatedProductsData?.data.products.slice(0, 5).map((item) => (
            <div key={item.asin} className="max-w-[150px] w-[150px]">
              <ProductCardMini
                id={item.asin}
                title={item.product_title}
                photo={item.product_photo}
                price={item.product_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

const Product = () => {
  const dispatch = useDispatch();
  const { user, wishlist, cart } = useSelector((state) => state.user);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [stars, setStars] = useState(0);
  const [size, setSize] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  // Fetch products details.
  const { data: productData, isFetching } =
    useGetProductDetailsQuery(productId);

  const addToCart = () => {
    // Look for the item in the cart. If it's already there, then update the quantity of the item by 1.

    const newCartItem = {
      id: productId,
      title: productData?.data.product_title,
      photo: productData?.data.product_photos[0],
      price: Number(
        productData?.data.product_price.replace(/[!,@#$%^&₹*]/g, "")
      ),
      descripton: productData?.data.product_description,
      quantity: 1,
    };

    dispatch(setCart([newCartItem, ...cart]));
  };

  const addToWishlist = () => {
    if (!user) {
      toast.info("Please login to add to wishlist");
      return;
    }

    // Check if the product is already in the wishlist. If yes, remove it.
    let newWishlist = [];
    if (wishlist.includes(productId)) {
      newWishlist = wishlist.filter((item) => item !== productId);
    } else {
      // Else add to wishlist.
      newWishlist = [...wishlist, productId];
    }

    // Update the wisthlist
    dispatch(setWishlist(newWishlist));
  };

  // Set the main image and also get the ratings star.
  useEffect(() => {
    if (productData?.data) {
      setMainImage(productData.data.product_photos[0]);
      setStars(Math.ceil(Number(productData.data.product_star_rating)));
    }
  }, [productData]);

  // Check if the item is in wishlist.
  useEffect(() => {
    if (wishlist.includes(productId)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlist]);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }

  return (
    <div className="py-10 transition-opacity ease-in duration-500 opacity-100 border-t-2 px-4 md:px-[5vw] lg:px-[7vw]">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3 xl:border-r-2">
          <div className="flex sm:flex-col gap-2 hide-scrollbar overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.data.product_photos.slice(0, 4).map((image, idx) => (
              <img
                src={image}
                alt={image}
                key={idx}
                className="w-[24%] sm:w-full flex-shrink-0 cursor-pointer border border-gray-100"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={mainImage} alt="main image" className="w-full h-auto" />
          </div>
        </div>

        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-gray-800">
            {productData?.data.product_title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <FaStar
                  key={idx}
                  size={20}
                  className={`${
                    stars > idx ? "text-orange-700" : "text-gray-300"
                  }`}
                  title={productData?.data.product_star_rating}
                />
              ))}
            <p className="pl-2">({productData?.data.product_num_ratings})</p>
          </div>
          <p className="mt-5 text-3xl font-medium mb-2">
            {productData?.data.product_price}{" "}
            {productData?.data.product_original_price !== null ? (
              <span className="font-light text-xl ml-1">
                MRP{" "}
                <span className="line-through">
                  {productData?.data.product_original_price}
                </span>
              </span>
            ) : (
              <></>
            )}
            <span className="text-xl ml-1 text-orange-600">
              (
              {productData?.data.product_original_price !== null &&
              productData?.data?.product_price !== null
                ? calculateDiscountPercentage(
                    productData?.data.product_price,
                    productData?.data.product_original_price
                  )
                : ""}{" "}
              %OFF){" "}
            </span>
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.data.product_description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            {productData?.data.product_variations.length !== 0 && (
              <div>
                <p className="text-gray-600">Select variant</p>
                <div className="flex gap-5 flex-wrap">
                  {productData?.data.product_variations.length !== 0 ? (
                    productData?.data.product_variations.size ? (
                      productData?.data.product_variations.size.map((item) => (
                        <button
                          key={item.asin}
                          className={`border py-2 px-3 rounded-md bg-gray-100 text-sm ${
                            item === size
                              ? "border-orange-500 text-orange-500"
                              : ""
                          } flex items-center justify-center`}
                          onClick={() => setSize(item)}
                        >
                          {item.value}
                        </button>
                      ))
                    ) : productData?.data.product_variations.color ? (
                      productData?.data.product_variations.color.map((item) => (
                        <button
                          key={item.asin}
                          className={`border py-2 px-3 rounded-md bg-gray-100 text-sm ${
                            item === size
                              ? "border-orange-500 text-orange-500"
                              : ""
                          } flex items-center justify-center`}
                          onClick={() => setSize(item)}
                        >
                          {item.value}
                        </button>
                      ))
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}

            <div className="flex mt-5 items-center gap-4">
              <button
                onClick={addToCart}
                className="bg-amazon_yellow text-white px-8 py-3 text-sm font-semibold active:bg-gray-700 flex items-center gap-2 rounded-md"
              >
                <IoMdCart size={20} className="text-white" />
                ADD TO CART
              </button>

              <button
                className="flex items-center gap-2 rounded-md px-8 hover:border-black py-3 text-sm font-semibold bg-white text-black border"
                onClick={addToWishlist}
              >
                {isInWishlist ? (
                  <IoMdHeart size={20} className="text-black" />
                ) : (
                  <IoIosHeartEmpty size={20} className="text-black" />
                )}
                {isInWishlist ? "WISHLISTED" : "WISHLIST"}
              </button>
            </div>

            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
              <p>100% Original Product</p>
              <p>COD Available</p>
              <p>{productData?.data.delivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        name={productData?.data.product_information["Generic Name"]}
      />
    </div>
  );
};

export default Product;

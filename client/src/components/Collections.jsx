import { useEffect, useState } from "react";
import { getProductPrice } from "../utils/utils";
import ProductCardMini from "./ProductCardMini";

const Collections = ({ title, data }) => {
  const [sortType, setSortType] = useState("relevance");
  const [products, setProducts] = useState([]);

  const sortProducts = () => {
    let productsCopy = products.slice();
    switch (sortType) {
      case "ascending":
        setProducts(
          productsCopy.sort((a, b) => getProductPrice(a) - getProductPrice(b))
        );
        break;

      case "descending":
        setProducts(
          productsCopy.sort((a, b) => getProductPrice(b) - getProductPrice(a))
        );
        break;

      default:
        setProducts(data.data.products);
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    setProducts(data.data.products);
  }, []);

  return (
    <div className="w-full h-screen mt-10 px-3 overflow-y-scroll">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-gray-700 uppercase">{title}</h1>
        <select
          className="border-2 border-gray-500 text-sm px-2 py-3 bg-white"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="ascending">Price Ascending</option>
          <option value="descending">Price Descending</option>
        </select>
      </div>
      <hr />
      <div className="mt-5 flex flex-wrap gap-5 gap-y-9 sm:justify-between justify-center px-5">
        {products.map((item) => (
          <div
            key={item.asin}
            className="relative max-w-[300px] sm:w-[300px] w-[250px] min-w-[250px]"
          >
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
  );
};

export default Collections;

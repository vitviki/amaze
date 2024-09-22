import { Carousel, Deals, ProductCard } from "../components";
import { sampleCardItems, sampleMoreCategories } from "../utils/data";
import {
  useGetBestDealsQuery,
  useGetBestSellersQuery,
} from "../redux/api/amazonCore";
import { useEffect, useState } from "react";

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [bestSellingComputers, setBestSellingComputers] = useState([]);
  const [bestSellingSports, setBestSellingSports] = useState([]);
  const [bestSellingBeauty, setBestSellingBeauty] = useState([]);

  // Fetch deals and best sellers
  const {
    data: dealData,
    isFetching: isFetchingDeals,
    error: errorDeals,
  } = useGetBestDealsQuery();

  const {
    data: bestSellersComputers,
    isFetching: isFetchingComputers,
    error: errorComputers,
  } = useGetBestSellersQuery("computers%2F1375424031");

  const {
    data: bestSellersSports,
    isFetching: isFetchingSports,
    error: errorSports,
  } = useGetBestSellersQuery("sports");

  const {
    data: bestSellersBeauty,
    isFetching: isFetchingBeauty,
    error: errorBeauty,
  } = useGetBestSellersQuery("beauty");

  // Format deals data.
  useEffect(() => {
    if (dealData) {
      dealData.data.deals.map((item) => {
        const newDealItem = {
          id: item.deal_id,
          title: item.deal_title,
          photo: item.deal_photo,
          asin: item.product_asin,
          badge: item.deal_badge,
        };
        setDeals((deals) => [...deals, newDealItem]);
      });
    }
  }, [dealData]);

  useEffect(() => {
    if (bestSellersComputers) {
      bestSellersComputers.data.best_sellers.slice(0, 15).map((item) => {
        const newItem = {
          id: item.asin,
          title: item.product_title,
          photo: item.product_photo,
          asin: item.asin,
          price: item.product_price,
        };
        setBestSellingComputers((bestSellingComputers) => [
          ...bestSellingComputers,
          newItem,
        ]);
      });
    }
  }, [bestSellersComputers]);

  useEffect(() => {
    if (bestSellersSports) {
      bestSellersSports.data.best_sellers.slice(0, 15).map((item) => {
        const newItem = {
          id: item.asin,
          title: item.product_title,
          photo: item.product_photo,
          asin: item.asin,
          price: item.product_price,
        };
        setBestSellingSports((bestSellingSports) => [
          ...bestSellingSports,
          newItem,
        ]);
      });
    }
  }, [bestSellersSports]);

  useEffect(() => {
    if (bestSellersBeauty) {
      bestSellersBeauty.data.best_sellers.slice(0, 15).map((item) => {
        const newItem = {
          id: item.asin,
          title: item.product_title,
          photo: item.product_photo,
          asin: item.asin,
          price: item.product_price,
        };
        setBestSellingBeauty((bestSellingBeauty) => [
          ...bestSellingBeauty,
          newItem,
        ]);
      });
    }
  }, [bestSellersBeauty]);

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
        <Deals data={deals} title={"Top Deals"} />

        {/* Best seller in laptops */}
        <Deals data={bestSellingComputers} title={"Best selling laptops"} />

        {/* More categories */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm: grid-cols-2 gap-x-4 gap-y-5">
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

        {/* Best seller in sports */}
        <Deals
          data={bestSellingSports}
          title={"Best selling sports equipments"}
        />

        {/* Best seller in beauty products */}
        <Deals
          data={bestSellingBeauty}
          title={"Best selling make & beauty products"}
        />
      </div>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../redux/api/amazonCore";
import { Collections } from "../components/";

const Category = () => {
  const { categoryId } = useParams();

  // Retrieve category data.
  const { data, isFetching, error } = useGetDataQuery(categoryId);

  if (isFetching) {
    return (
      <div className="w-full h-screen pt-10">
        <h1 className="text-3xl text-center">Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <Collections
        title={categoryId[0].toUpperCase() + categoryId.slice(1)}
        data={data}
      />
    </>
  );
};

export default Category;

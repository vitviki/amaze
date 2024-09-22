import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../redux/api/amazonCore";
import { Collections } from "../components";

const Search = () => {
  const { searchTerm } = useParams();

  // Retrieve data.
  const { data, isFetching, error } = useGetDataQuery(searchTerm);

  if (isFetching) {
    return (
      <div className="w-full h-screen pt-10">
        <h1 className="text-3xl text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Collections
        title={`Results: ${searchTerm[0].toUpperCase() + searchTerm.slice(1)}`}
        data={data}
      />
    </>
  );
};

export default Search;

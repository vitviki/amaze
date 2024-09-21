import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();

  return <div className="w-full h-screen pt-10"></div>;
};

export default Category;

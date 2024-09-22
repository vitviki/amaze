import { Link } from "react-router-dom";

const ProductCard = ({ title, link, images, subTitle }) => {
  return (
    <div className="max-w-[300px] min-w-[150px] xl:h-[400px] lg:h-[300px] sm:h-[250px] rounded-md shadow-lg px-5 py-8 flex flex-col justify-between">
      <h3 className="xl:text-xl sm:text-base font-medium">{title}</h3>

      <div className="xl:h-[250px] lg:h-[180px] lg:w-[200px] xl:w-[250px] sm:w-[150px] w-[140px] ">
        <img src={images} alt={title} />
      </div>

      <Link className="text-emerald-700 text-sm" to={link}>
        {subTitle}
      </Link>
    </div>
  );
};

export default ProductCard;

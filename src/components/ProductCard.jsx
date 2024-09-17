import { Link } from "react-router-dom";

const ProductCard = ({ title, link, images, subTitle }) => {
  console.log(images.length);
  return (
    <div className="max-w-[300px] min-w-[240px] h-[400px] rounded-md shadow-lg px-5 py-8 flex flex-col justify-between">
      <h3 className="text-xl font-medium">{title}</h3>
      {images.length > 1 ? (
        <div className="grid grid-cols-2 gap-4 h-[250px] ">
          {images.map((item) => (
            <img
              key={item._id}
              src={item.img}
              alt={item.title}
              className="w-[120px]"
            />
          ))}
        </div>
      ) : (
        <div className=" h-[250px]">
          <img src={images[0]} alt={title} />
        </div>
      )}
      <Link className="text-emerald-700 text-sm">{subTitle}</Link>
    </div>
  );
};

export default ProductCard;

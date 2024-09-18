import { Link } from "react-router-dom";

const ProductCardMini = ({ id, title, photo, badge, price }) => {
  return (
    <Link to={`products/${id}`}>
      {badge && (
        <div className="absolute top-0 left-0 flex items-center px-3 bg-red-500 text-white font-medium md:text-base text-sm">
          <h5>{badge}</h5>
        </div>
      )}
      <img src={photo} alt={title} className="md:mt-3 mt-2" />
      <h3 className="md:text-sm text-xs font-medium truncate ...">{title}</h3>
      {price && <p className="text-center text-sm text-gray-900">{price}</p>}
    </Link>
  );
};

export default ProductCardMini;

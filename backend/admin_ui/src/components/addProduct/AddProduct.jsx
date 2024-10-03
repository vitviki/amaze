import { useState } from "react";
import "./addProduct.css";
import Upload from "../upload/Upload";

const AddProduct = ({ setAddProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [bestSeller, setBestSeller] = useState(false);

  const handleAddProduct = () => {};
  return (
    <div className="addProduct">
      <div className="productForm">
        <h3>Enter product details</h3>
        {/* Name, price, 1-4 images, bestseller, description */}
        <div>
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            rows={10}
            cols={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="bestSeller">
            <input
              type="checkbox"
              name="bestseller"
              id="bestseller"
              value={bestSeller}
              onChange={() => setBestSeller((prev) => !prev)}
            />
            <label htmlFor="bestseller">Best Seller</label>
          </div>
        </div>
        <Upload />
        <div className="buttons">
          <button onClick={handleAddProduct}>Add Product</button>
          <button onClick={() => setAddProduct(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

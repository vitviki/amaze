import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "./addProduct.css";

const AddProduct = ({ setAddProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [images, setImages] = useState();
  const uploadRef = useRef(null);

  const upload = async (data) => {
    const response = await toast.promise(
      fetch(`${import.meta.env.VITE_BACKEND_URL}/products/add-product`, {
        method: "POST",
        body: data,
      })
        .then((data) => {
          if (data.status === 200) {
            setTitle("");
            setPrice(0);
            setCategory("");
            setBrand("");
            setQuantity(0);
            setDescription("");
            setBestSeller(false);
            setCategory("");
            setAddProduct(false);
          }
        })
        .catch((err) => console.log(err)),
      {
        pending: "Adding product",
        success: "Product added successfully 👌",
        error: "Upload rejected. Please try again 🤯",
      }
    );
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("rating", rating);
    formData.append("description", description);
    formData.append("bsetSeller", bestSeller);
    formData.append("category", category);
    formData.append("brand", brand);
    [...images].forEach((image) => {
      formData.append("images", image);
    });

    console.log(formData);

    upload(formData);
  };

  const handleChange = (e) => {
    setImages(e.target.files);
  };
  return (
    <div className="addProduct">
      <div className="productForm">
        <h3>Enter product details</h3>
        {/* Name, price, 1-4 images, bestseller, description */}
        <form onSubmit={handleAddProduct}>
          <div>
            <div className="inputBox">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="Price"
                required
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="inputBox">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                required
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                required
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="inputBox">
              <label htmlFor="ratings">Rating</label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                placeholder="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="checkBox">
            <input
              type="checkbox"
              name="bestseller"
              id="bestseller"
              value={bestSeller}
              onChange={() => setBestSeller((prev) => !prev)}
            />
            <label htmlFor="bestseller">Best Seller</label>
          </div>
          <div className="descriptionBox">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input
            type="file"
            ref={uploadRef}
            onChange={handleChange}
            multiple
            hidden
          />
          <label
            onClick={() => uploadRef.current.click()}
            className="upload_button"
          >
            Upload Images
          </label>
          <div className="buttons">
            <button type="submit">Add Product</button>
            <button onClick={() => setAddProduct(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import "./dashboard.css";
import { AddProduct } from "../../components";
import { useState } from "react";

const Dashboard = () => {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div className="dashboardContent">
      {addProduct && <AddProduct setAddProduct={setAddProduct} />}
      <h1>Amaze</h1>
      <h3>Admin Dashboard</h3>
      <button onClick={() => setAddProduct(true)}>Add a new product</button>
    </div>
  );
};

export default Dashboard;

import { Routes, Route, Link } from "react-router-dom";
import { DashboardLayout } from "./layouts";
import {
  AllBrands,
  AllProducts,
  AllCategories,
  Category,
  Product,
  Brand,
  Dashboard,
  Login,
  Users,
} from "./pages";
import logo from "./assets/amaze_logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
};

const App = () => {
  return (
    <div className="rootLayout">
      <Header />
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/brands" element={<AllBrands />} />
          <Route path="/brand/:brandID" element={<Brand />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;

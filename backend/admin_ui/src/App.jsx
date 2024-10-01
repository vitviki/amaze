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
  AddProduct,
} from "./pages";
import logo from "./assets/amaze_logo.png";

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
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/brands" element={<AllBrands />} />
          <Route path="/brand/:brandID" element={<Brand />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

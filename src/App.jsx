import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Login, SignUp } from "./pages";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

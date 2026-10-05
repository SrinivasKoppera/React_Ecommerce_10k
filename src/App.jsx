import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Products from "./pages/products";
import ProductsDetails from "./pages/products-details";
import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";
import ContactUs from "./pages/contactus";
import Cart from "./pages/cart";

function PublicRoute() {
  return localStorage.getItem("currentUser") ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  );
}

function PrivateRoute() {
  return localStorage.getItem("currentUser") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

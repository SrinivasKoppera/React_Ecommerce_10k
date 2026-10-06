import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <header className="header">
      <div className="logo">
        <h1>10000</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

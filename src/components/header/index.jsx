import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

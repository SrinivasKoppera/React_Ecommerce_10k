import "./index.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const navigateToDetails = (productId) => {
    // Implement navigation to product details page
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <button
          className="add-to-cart-button"
          onClick={() => navigateToDetails(product.id)}
        >
          View Product Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

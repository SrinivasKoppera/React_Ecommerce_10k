import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const ProductsDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const fetchProductDetails = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      await fetchProductDetails();
    })();
  }, []);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="product-details-container">
            <div className="product-image-container">
              <img src={product?.thumbnail} alt="Product" />
            </div>
            <div className="product-info-container">
              <h2 className="product-title">{product?.title}</h2>
              <p className="product-description">{product?.description}</p>
              <p className="product-price">{product?.price}</p>
              <p className="product-rating">{product?.rating}</p>
              <p className="product-stock">Product Stock: {product?.stock}</p>
              <p className="product-brand">Product Brand : {product?.brand}</p>
              <p className="product-category">
                Product Category : {product?.category}
              </p>
              <p className="product-status">
                Availability Status: {product?.availabilityStatus}
              </p>
              <div className="product-quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetails;

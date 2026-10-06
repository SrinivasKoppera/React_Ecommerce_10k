import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cart.cart;
  });

  if (cartItems.length === 0) {
    return <h1 className="empty-cart-message">Your cart is empty</h1>;
  }

  const handleRemoveFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: productId },
    });
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img
            src={item.product.images[0]}
            alt={item.product.title}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h4 className="cart-item-title">{item.product.title}</h4>
            <p className="cart-item-description">{item.product.description}</p>
            <p className="cart-item-price">${item.product.price}</p>
            <button
              className="cart-item-remove-button"
              onClick={() => handleRemoveFromCart(item.product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

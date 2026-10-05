import "./index.css";

const Cart = () => {
  return (
    <div>
      <div className="cart-item">
        <img
          src="../../../public/hero.jpg"
          alt="Cart"
          className="cart-item-image"
        />
        <div className="cart-item-details">
          <h4 className="cart-item-title">Title of Cart Item</h4>
          <p className="cart-item-description">Description of Cart Item</p>
          <p className="cart-item-price">Price of Cart Item</p>
          <button className="cart-item-remove-button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

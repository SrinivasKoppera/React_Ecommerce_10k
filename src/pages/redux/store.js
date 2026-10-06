import { createStore, combineReducers } from "redux";

const initialState = {
  cart: [],
  user: null,
  orders: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      console.log("Removing item from cart:", action.payload);
      //   console.log("removing", {
      //     cart: state.cart.filter((item) => item.id !== action.payload.id),
      //   });
      return {
        ...state,
        cart: state.cart.filter((item) => {
          console.log(item);
          return item.product.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ cart: cartReducer, user: userReducer }),
);
export default store;

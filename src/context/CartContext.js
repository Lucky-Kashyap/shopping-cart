import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

// export const CartContext = createContext(initialState);
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load products from localStorage when the component mounts
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cardList"));
    if (savedProducts) {
      dispatch({ type: "LOAD_PRODUCTS", payload: savedProducts });
    }
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state.cartList));
  }, [state.cartList]);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);

    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  //   const value = {
  //     total:state.total,
  //     cartList:state.cartList
  //   };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

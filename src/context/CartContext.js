import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

// export const CartContext = createContext(initialState);
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state,dispatch] = useReducer(cartReducer,initialState);

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };
//   const value = {
//     total:state.total,
//     cartList:state.cartList
//   };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

import { createContext, useContext, useReducer } from 'react'
import { cartReducer, initialState } from './cartReducer'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  function addToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  function removeFromCart(product) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        count: state.count,
        total: state.total,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount(count + 1)
  }

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

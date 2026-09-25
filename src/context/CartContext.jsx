import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // chaque élément du panier : { id, name, price, quantity }
  const [items, setItems] = useState([])

  function addToCart(product) {
    const existingItem = items.find((item) => item.id === product.id)

    if (existingItem) {
      // le produit est déjà dans le panier, on change juste la quantité
      setItems(
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setItems([...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }])
    }
  }

  // nombre total d'articles
  let count = 0
  items.forEach((item) => {
    count = count + item.quantity
  })

  // prix total du panier
  let total = 0
  items.forEach((item) => {
    total = total + item.price * item.quantity
  })

  return (
    <CartContext.Provider value={{ items, count, total, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

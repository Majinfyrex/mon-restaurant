export const initialState = {
  items: [], // { id, name, price, quantity }
  count: 0,
  total: 0,
}

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)
      let newItems

      if (existingItem) {
        // déjà dans le panier : on augmente juste la quantité
        newItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        newItems = [...state.items, { id: product.id, name: product.name, price: product.price, quantity: 1 }]
      }

      return {
        items: newItems,
        count: state.count + 1,
        total: state.total + product.price,
      }
    }

    case 'REMOVE_FROM_CART': {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      // produit pas dans le panier : on ne fait rien
      if (!existingItem) {
        return state
      }

      let newItems
      if (existingItem.quantity > 1) {
        // on baisse la quantité de 1
        newItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      } else {
        // quantité = 1 : on supprime le produit
        newItems = state.items.filter((item) => item.id !== product.id)
      }

      return {
        items: newItems,
        count: state.count - 1,
        total: state.total - existingItem.price,
      }
    }

    default:
      return state
  }
}

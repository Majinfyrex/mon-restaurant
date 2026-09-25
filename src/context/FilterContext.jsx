import { createContext, useContext, useState } from 'react'
import products from '../data/products'

const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState('')

  // si on reclique sur la même catégorie on enlève le filtre
  function selectCategory(newCategory) {
    if (newCategory === category) {
      setCategory('')
    } else {
      setCategory(newCategory)
    }
  }

  function selectTag(newTag) {
    if (newTag === tag) {
      setTag('')
    } else {
      setTag(newTag)
    }
  }

  function resetFilters() {
    setCategory('')
    setTag('')
  }

  // on applique les filtres sur les produits
  const filteredProducts = products.filter((product) => {
    if (category !== '' && product.category !== category) {
      return false
    }
    if (tag !== '' && !product.tags.includes(tag)) {
      return false
    }
    return true
  })

  return (
    <FilterContext.Provider
      value={{ category, tag, selectCategory, selectTag, resetFilters, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  )
}

// petit hook pour pas réécrire useContext(FilterContext) partout
export function useFilter() {
  return useContext(FilterContext)
}

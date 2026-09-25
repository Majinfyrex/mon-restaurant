import { createContext, useContext, useState } from 'react'
import products from '../data/products'

const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [search, setSearch] = useState('')

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
    setMaxPrice('')
    setSearch('')
  }

  // on applique les filtres sur les produits
  const filteredProducts = products.filter((product) => {
    if (category !== '' && product.category !== category) {
      return false
    }
    if (tag !== '' && !product.tags.includes(tag)) {
      return false
    }
    // on garde les produits moins chers ou égal au prix donné
    if (maxPrice !== '' && product.price > Number(maxPrice)) {
      return false
    }
    // recherche dans le titre, la catégorie et les tags (mots clés)
    if (search !== '') {
      const text = search.toLowerCase()
      const inName = product.name.toLowerCase().includes(text)
      const inCategory = product.category.toLowerCase().includes(text)
      const inTags = product.tags.some((t) => t.toLowerCase().includes(text))

      if (!inName && !inCategory && !inTags) {
        return false
      }
    }
    return true
  })

  return (
    <FilterContext.Provider
      value={{
        category,
        tag,
        maxPrice,
        search,
        selectCategory,
        selectTag,
        setMaxPrice,
        setSearch,
        resetFilters,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

// petit hook pour pas réécrire useContext(FilterContext) partout
export function useFilter() {
  return useContext(FilterContext)
}

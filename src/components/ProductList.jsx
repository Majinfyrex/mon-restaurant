import ProductCard from './ProductCard'
import { useFilter } from '../context/FilterContext'

function ProductList() {
  const { filteredProducts, resetFilters } = useFilter()

  if (filteredProducts.length === 0) {
    return (
      <div className="alert alert-secondary">
        Aucun produit ne correspond à votre recherche.
        <button className="btn btn-link" onClick={resetFilters}>Voir tous les produits</button>
      </div>
    )
  }

  return (
    <div className="row g-4">
      {filteredProducts.map((product) => (
        <div className="col-12 col-md-6 col-lg-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList

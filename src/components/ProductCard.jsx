import Button from './Button'
import Tag from './Tag'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { items, addToCart, removeFromCart } = useCart()

  // on cherche si le produit est déjà dans le panier
  const itemInCart = items.find((item) => item.id === product.id)

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top product-img" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
          <h5 className="card-title mb-0">{product.name}</h5>
          <h5 className="mb-0 text-nowrap ms-2">{product.price} €</h5>
        </div>

        {product.tags.length > 0 && (
          <div className="d-flex flex-wrap gap-1 border-bottom pb-3 mb-3">
            {product.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        )}

        <div className="mt-auto">
          <Button className="w-100" onClick={() => addToCart(product)}>
            Ajouter au panier
            {itemInCart && <span className="badge bg-primary ms-2">{itemInCart.quantity}</span>}
          </Button>
          {itemInCart && (
            <Button
              variant="outline-danger"
              className="w-100 mt-2"
              onClick={() => removeFromCart(product)}
            >
              Retirer du panier
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import { useCart } from '../context/CartContext'

function Cart() {
  const { count } = useCart()

  return (
    <button className="btn btn-light cart-btn">
      <i className="bi bi-cart"></i>
      {count > 0 && (
        <span className="badge rounded-pill bg-danger ms-1">{count}</span>
      )}
    </button>
  )
}

export default Cart

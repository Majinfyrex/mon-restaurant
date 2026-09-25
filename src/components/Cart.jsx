import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartModal from './CartModal'

function Cart() {
  const { count } = useCart()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className="btn btn-light cart-btn" onClick={() => setShowModal(true)}>
        <i className="bi bi-cart"></i>
        {count > 0 && (
          <span className="badge rounded-pill bg-danger ms-1">{count}</span>
        )}
      </button>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Cart

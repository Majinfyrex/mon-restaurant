import { useCart } from '../context/CartContext'

function CartModal({ onClose }) {
  const { items, total, addToCart, removeFromCart } = useCart()

  return (
    <>
      <div className="modal d-block" tabIndex="-1" onClick={onClose}>
        {/* stopPropagation pour pas fermer la modal quand on clique dedans */}
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mon panier</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              {items.length === 0 ? (
                <p className="mb-0">Votre panier est vide.</p>
              ) : (
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Produit</th>
                      <th>Prix unitaire</th>
                      <th>Quantité</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price} €</td>
                        <td className="text-nowrap">
                          <button
                            className="btn btn-sm btn-outline-dark"
                            onClick={() => removeFromCart(item)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-dark"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </button>
                        </td>
                        <td className="text-end">{item.price * item.quantity} €</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="modal-footer justify-content-between">
              <strong>Total : {total} €</strong>
              <button className="btn btn-dark" onClick={onClose}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  )
}

export default CartModal

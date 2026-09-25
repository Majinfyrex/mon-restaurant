// bouton réutilisable, on peut changer la couleur avec variant
function Button({ children, onClick, variant = 'outline-primary', className = '' }) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

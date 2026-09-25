import bgHeader from '../assets/bg_header.jpg'
import Cart from './Cart'

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className="container position-relative h-100">
        <Cart />
        <h1 className="header-title">Mon Restaurant</h1>
      </div>
    </header>
  )
}

export default Header

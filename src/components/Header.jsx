import bgHeader from '../assets/bg_header.jpg'

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className="container position-relative h-100">
        <button className="btn btn-light cart-btn">
          <i className="bi bi-cart"></i>
        </button>
        <h1 className="header-title">Mon Restaurant</h1>
      </div>
    </header>
  )
}

export default Header

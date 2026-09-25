import bgFooter from '../assets/bg_footer.jpg'

function Footer() {
  // l'année change toute seule
  const year = new Date().getFullYear()

  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <div className="container text-center">
        <p className="mb-0">© {year} Mon Restaurant - Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer

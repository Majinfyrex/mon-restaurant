import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="container my-5">
        <p>Les produits arrivent bientôt...</p>
      </main>
      <Footer />
    </>
  )
}

export default App

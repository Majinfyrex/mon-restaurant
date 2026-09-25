import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import products from './data/products'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="container my-5">
        <ProductList products={products} />
      </main>
      <Footer />
    </>
  )
}

export default App

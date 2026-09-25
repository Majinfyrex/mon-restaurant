import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import products from './data/products'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <Sidebar />
          </div>
          <div className="col-12 col-lg-9">
            <ProductList products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

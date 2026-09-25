import SearchBar from './SearchBar'
import { useFilter } from '../context/FilterContext'

function Nav() {
  const { resetFilters } = useFilter()

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={resetFilters}>Mon Restaurant</a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={resetFilters}>Menu</a>
          </li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Nav

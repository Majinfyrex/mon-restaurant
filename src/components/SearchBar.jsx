import { useFilter } from '../context/FilterContext'

function SearchBar() {
  const { search, setSearch } = useFilter()

  return (
    <input
      type="search"
      className="form-control form-control-sm search-input"
      placeholder="Rechercher un plat..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar

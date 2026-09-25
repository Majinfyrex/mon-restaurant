import { useFilter } from '../../context/FilterContext'

function PriceBlock() {
  const { maxPrice, setMaxPrice } = useFilter()

  return (
    <div className="card card-body mb-3">
      <div className="input-group">
        <span className="input-group-text">€</span>
        <input
          type="number"
          min="0"
          className="form-control"
          placeholder="Filtrer par prix"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  )
}

export default PriceBlock

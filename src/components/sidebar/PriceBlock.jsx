function PriceBlock() {
  return (
    <div className="card card-body mb-3">
      <div className="input-group">
        <span className="input-group-text">€</span>
        <input type="number" className="form-control" placeholder="Filtrer par prix" />
      </div>
    </div>
  )
}

export default PriceBlock

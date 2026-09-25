function Tag({ name, onClick }) {
  return (
    <button className="btn btn-outline-dark btn-sm tag" onClick={onClick}>
      {name}
    </button>
  )
}

export default Tag

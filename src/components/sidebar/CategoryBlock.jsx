const categories = ['Burger', 'Pizza', 'Kebab', 'Poulet frit', 'Accompagnements', 'Desserts', 'Boissons']

function CategoryBlock() {
  return (
    <div className="list-group mb-3">
      <div className="list-group-item bg-dark text-white">Catégorie</div>
      {categories.map((category) => (
        <button key={category} className="list-group-item list-group-item-action">
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryBlock

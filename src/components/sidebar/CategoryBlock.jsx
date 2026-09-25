import { useFilter } from '../../context/FilterContext'

const categories = ['Burger', 'Pizza', 'Kebab', 'Poulet frit', 'Accompagnements', 'Desserts', 'Boissons']

function CategoryBlock() {
  const { category, selectCategory } = useFilter()

  return (
    <div className="list-group mb-3">
      <div className="list-group-item bg-dark text-white">Catégorie</div>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`list-group-item list-group-item-action ${category === cat ? 'active' : ''}`}
          onClick={() => selectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryBlock

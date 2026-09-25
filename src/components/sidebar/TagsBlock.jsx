import Tag from '../Tag'
import products from '../../data/products'

// on récupère tous les tags des produits sans les doublons
const allTags = []
products.forEach((product) => {
  product.tags.forEach((tag) => {
    if (!allTags.includes(tag)) {
      allTags.push(tag)
    }
  })
})

function TagsBlock() {
  return (
    <div className="card card-body mb-3">
      <div className="d-flex flex-wrap gap-1">
        {allTags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </div>
  )
}

export default TagsBlock

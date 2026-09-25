import CategoryBlock from './sidebar/CategoryBlock'
import PriceBlock from './sidebar/PriceBlock'
import TagsBlock from './sidebar/TagsBlock'

function Sidebar() {
  return (
    <aside>
      <CategoryBlock />
      <PriceBlock />
      <TagsBlock />
    </aside>
  )
}

export default Sidebar

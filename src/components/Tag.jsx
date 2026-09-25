import { useFilter } from '../context/FilterContext'

function Tag({ name }) {
  const { tag, selectTag } = useFilter()

  // le tag sélectionné est en noir
  const isActive = tag === name

  return (
    <button
      className={`btn btn-sm tag ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}
      onClick={() => selectTag(name)}
    >
      {name}
    </button>
  )
}

export default Tag

import './index.css'

const SuggestionItem = props => {
  const {listDetails, buttonClick} = props
  const {suggestion} = listDetails

  const addText = () => {
    buttonClick(suggestion)
  }

  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="icon"
        alt="arrow"
        onClick={addText}
      />
    </li>
  )
}

export default SuggestionItem

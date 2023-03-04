import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onCLickButton = value => {
    this.setState({inputValue: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputValue} = this.state

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="main-logo"
        />
        <div className="card">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search Google"
              value={inputValue}
              onChange={this.changeInputValue}
            />
          </div>
          <ul className="list-items">
            {searchResult.map(eachItem => (
              <SuggestionItem
                listDetails={eachItem}
                buttonClick={this.onCLickButton}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

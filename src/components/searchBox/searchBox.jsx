import React, { Component } from 'react'
import './searchBox.css'

class SearchBox extends Component {

  render() {
    return (
      <div>
        <input
          className="search"
          onChange={this.props.onChange}
          type="search"
          placeholder="Search Monsters"
        />
      </div>
    )
  }
}

export default SearchBox

import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';


class App extends Component {
  state = {
    monsters: [
      { name: 'Frankenstein', id: 1, email: "a@a.com" },
      { name: 'Dracula', id: 2, email: "a@a.com" },
      { name: 'Zombie', id: 3, email: "a@a.com" },
      { name: 'Mermaid', id: 4, email: "a@a.com" },
      { name: 'Godzilla', id: 5, email: "a@a.com" },
      { name: 'Alien', id: 6, email: "a@a.com" },
      { name: 'Mummy', id: 7, email: "a@a.com" },
      { name: 'Blobby', id: 8, email: "a@a.com" },
      { name: 'WareWolf', id: 9, email: "a@a.com" },
    ],
    searchField: ""
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  filterMonsters() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return filteredMonsters;
  }

  render() {
    const filteredMonsters = this.filterMonsters();
    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox onChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )

  }

}


export default App;

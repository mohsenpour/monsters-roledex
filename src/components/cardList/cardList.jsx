import React, { Component } from 'react';
import './cardList.css'
import Card from '../card/card';

class CardList extends Component {
  state = { filteredMonsters: [] }
  componentDidMount() {
    this.setState({ filteredMonsters: this.props.monsters })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ filteredMonsters: this.props.monsters })
    }
  }


  render() {
    return (
      <div className="cardList">
        {
          this.state.filteredMonsters.map(monster => {
            return <Card key={monster.name} monster={monster}></Card>;
          })}
      </div>
    )
  }
}

export default CardList;


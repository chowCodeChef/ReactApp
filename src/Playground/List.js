import React, {Component} from 'react';

const animals = ['dog', 'cat', 'monkey'];


class List extends Component {
    render () {
      return (
        <ol> 
          {this.props.animals.map((animal, index) => <li key={index}> {animal} </li>)}
        </ol>
      )
    }
  }

export default List
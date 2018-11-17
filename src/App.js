import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mos', age: 25 },
      { name: 'Once', age: 24 },
      { name: 'Menu', age: 23 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName, newAge) => {
    //console.log('Click !!');
    // DON'T DO THIS: this.state.persons[0].name = 'Panumas';
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: 'Oraone ppk', age: 24 },
        { name: 'Menu Seting', age: 23 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mos', age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'Menu Seting', age: 23 }
      ]
    })
  }

  render () {
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>Does this React 16 !</h1>
        <p>this is a working!</p>
        <button
        style={styleBtn} 
        onClick={() => this.switchNameHandler('Panumas!!', 299)}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Juck!')}
          changed={this.nameChangeHandler}>
          My Hobbies: Sleep </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does this React 16 !'))
  }
}

export default App;



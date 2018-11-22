import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdf1", name: "Mos", age: 25 },
      { id: "ffrr2", name: "Once", age: 24 },
      { id: "qwqe3", name: "Menu", age: 23 },
      { id: "qwer4", name: "Main4", age: 22 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const personNameChange = { ...this.state.persons[personIndex] };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    personNameChange.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = personNameChange;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personInsex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personInsex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styleBtn = {
      backgroundColor: "green",
      color: "#ffffff",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persone, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={persone.name}
                age={persone.age}
                key={persone.id}
                changed={event => this.nameChangeHandler(event, persone.id)}
              />
            );
          })}
        </div>
      );
      styleBtn.backgroundColor = "red";
    }

    //Dynamic class
    const assigenedClasses = [];
    if (this.state.persons.length <= 2) {
      assigenedClasses.push(classes.red); // class = ['red']
    }
    if (this.state.persons.length <= 1) {
      assigenedClasses.push(classes.bold); // class = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Does this React 16 !</h1>
        <p className={assigenedClasses.join(" ")}>this is a working!</p>
        <button style={styleBtn} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

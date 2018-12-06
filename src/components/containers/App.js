import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../Persons/Persons";
import Cockpit from "../Cockpit/Cockpit";
import Aux from "../hoc/_Aux";
import withClass from "../hoc/withClass";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "asdf1", name: "Mos", age: 25 },
        { id: "ffrr2", name: "Once", age: 24 },
        { id: "qwqe3", name: "Menu", age: 23 }
      ],
      otherState: "some other value",
      showPersons: false,
      togleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDitUpdate");
  }

  // state = {
  //   persons: [
  //     { id: "asdf1", name: "Mos", age: 25 },
  //     { id: "ffrr2", name: "Once", age: 24 },
  //     { id: "qwqe3", name: "Menu", age: 23 },
  //     { id: "qwer4", name: "Main4", age: 22 }
  //   ],
  //   otherState: "some other value",
  //   showPersons: false
  // };

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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        togleClicked: prevState.togleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

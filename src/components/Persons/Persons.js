import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount");
    this.lastPersonRef.current.focus();
  }


  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Persons.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   // return  true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDitUpdate");
  }

  render() {
    return this.props.persons.map((persone, index) => {
      console.log("[Persons.js] inside render()");
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={persone.name}
          position ={index}
          age={persone.age}
          ref={this.lastPersonRef}
          key={persone.id}
          changed={event => this.props.changed(event, persone.id)}
        />
      );
    });
  }
}

export default Persons;

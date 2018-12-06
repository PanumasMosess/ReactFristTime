import React from "react";
import classes from "./Cockpit.css";
import Aux from "../hoc/_Aux";

const cockpit = props => {
  //Dynamic class
  const assigenedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(" ");
  }
  if (props.persons.length <= 2) {
    assigenedClasses.push(classes.red); // class = ['red']
  }
  if (props.persons.length <= 1) {
    assigenedClasses.push(classes.bold); // class = ['red', 'bold']
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assigenedClasses.join(" ")}>this is a working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default React.memo(cockpit);

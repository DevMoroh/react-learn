import React, {Component} from 'react';

import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          { id: '1', name: 'Max', age: 34 },
          { id: '2', name: 'Sergey', age: 35 },
          { id: '3', name: 'John', age: 12 },
      ],
      showPersons: false,
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons});
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonsHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  };

  render() {
      let persons = null;
      let btnClass = '';

      if (this.state.showPersons) {
          persons = <div>
              {this.state.persons.map((person, index) => {
                return <Person name={person.name} age={person.age}
                               click={() => this.deletePersonsHandler(index)}
                               key={person.id}
                               changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              })}
          </div>;

          btnClass = classes.Red;
      }

      const assingedClasses = [];
      if (this.state.persons.length <= 2) {
          assingedClasses.push(classes.red);
      }

      if (this.state.persons.length <= 1) {
          assingedClasses.push(classes.bold);
      }

      return (
          <div className={classes.App}>

              <h1>Hi, this is react application!</h1>
              <p className={assingedClasses.join(' ')}>This is really working!</p>
              <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle persons</button>
              {persons}
          </div>
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'));
      )
  }
}

export default App;

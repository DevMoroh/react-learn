import React, {Component} from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
      persons: [
          { id: '1', name: 'Max', age: 34 },
          { id: '2', name: 'Sergey', age: 35 },
          { id: '3', name: 'John', age: 12 },
      ],
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authentificated: false,
  };

  static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
  }

  componentDidMount() {
      console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('[App.js] shouldComponentUpdate');
      return true;
  }

  // componentWillMount() {
  //     console.log('[App.js] componentWillMount');
  // }

  constructor(props) {
      super(props);
      console.log('[App.js] constructor');
  }

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

      console.log(this.state.changeCounter);
      this.setState((prevState) => {
          return {persons: persons, changeCounter: prevState.changeCounter + 1}
      });
  }

  loginHandler = () => {
      this.setState({ authentificated: true})
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

      if (this.state.showPersons) {
          persons = <div>
              <Persons persons={this.state.persons}
                clicked={this.deletePersonsHandler}
                changed={this.nameChangedHandler}
                isAuthentificated={this.state.authentificated}
              />
          </div>;

      }

      return (
          <Aux>
            <button onClick={() => { this.setState({showCockpit: false}) } }>Remove Cockpit!</button>
              <AuthContext.Provider value={{
                  authentificated: this.state.authentificated,
                  login: this.loginHandler
              }}>
                {this.state.showCockpit ?
                  <Cockpit
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                  /> : null}
                {persons}
              </AuthContext.Provider>
          </Aux>
      )
  }
}

export default withClass(App, classes.App);

import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          { name: 'Max', age: 34 },
          { name: 'Sergey', age: 35 },
          { name: 'John', age: 12 },
      ]
  };

  switchNameHandler = () => {
      // console.log('switchNameHandler....');
      // this.state.persons[0].name = 'test name';
      this.setState({
          persons: [
              { name: 'Max---1', age: 34 },
              { name: 'Sergey', age: 35 },
              { name: 'John', age: 124 },
          ]
      });
  };

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  <h1>Hi, this is react application!</h1>
                  <button onClick={this.switchNameHandler}>Switch name</button>
                  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Thi is my person</Person>
                  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                  <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
              </header>
          </div>
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'));
      )
  }
}

export default App;

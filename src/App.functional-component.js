import React, {Component, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Max', age: 34 },
            { name: 'Sergey', age: 35 },
            { name: 'John', age: 12 },
        ]
    });

    const [otherState, setOtherState] = useState('some other state');

    console.log(otherState);

    const switchNameHandler = () => {
        // console.log('switchNameHandler....');
        // this.state.persons[0].name = 'test name';
        setPersonsState({
            persons: [
                { name: 'Max---1', age: 34 },
                { name: 'Sergey', age: 35 },
                { name: 'John', age: 124 },
            ],
            otherState: true,
        });
    };

    /**
     * this.setState({
            persons: [
                { name: 'Max---1', age: 34 },
                { name: 'Sergey', age: 35 },
                { name: 'John', age: 124 },
            ]
        });
     */

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
                    <button onClick={switchNameHandler}>Switch name</button>
                    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >Thi is my person</Person>
                    <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
                    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
                </header>
            </div>
            // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'));
    )
}

export default app;
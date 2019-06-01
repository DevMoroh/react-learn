import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    getSnapshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'my message!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log('[Persons.js] rendering...');

        return (
            this.props.persons.map((person, index) => {
                return <Person key={person.id}
                               name={person.name} age={person.age}
                               click={() => this.props.clicked(index)}
                               changed={(event) => this.props.changed(event, person.id)}
                               isAuth={this.props.isAuthentificated}
                />
            })
        )
    }
};

export default Persons;
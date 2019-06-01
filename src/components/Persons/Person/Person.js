import React, {Component} from 'react';

import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount()
    {
        this.inputElementRef.current.focus();
        console.log(this.context.authentificated, '[this.context.authentificated]');
    }

    render() {
        return (
            <Aux>
                {this.context.authentificated ? <p>Authentificated</p> : <p>Please login!</p>}

                <p onClick={this.props.click}>Hi I am a {this.props.name}! And I have {this.props.age} </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                   // ref={(inputEl) => {}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
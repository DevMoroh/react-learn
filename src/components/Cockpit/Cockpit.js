import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authentificated, 'authContext');

    /** This call every time when component mounted and removed [] */
    useEffect(() => {
        console.log('cockpit.js useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        toggleBtnRef.current.click();
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup');
        }
    }, []);

    /** This call every time when component update */
    useEffect(() => {
        console.log('cockpit.js 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] 2nd cleanup');
        }
    });


    const assingedClasses = [];
    if (props.persons.length <= 2) {
        assingedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assingedClasses.push(classes.bold);
    }
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>

            <h1>Hi, this is react application!</h1>
            <p className={assingedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle persons</button>

            <button onClick={authContext.login}>Login</button>
        </div>
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'));
    )
}

export default Cockpit;
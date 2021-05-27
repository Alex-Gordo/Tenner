import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from './NavBar.jsx';

export class AppHeader extends Component {



    render() {
        const { onLogout, loggedInUser } = this.props
        return (
            <header className="header" >
                <NavLink to="/"><h1 className="header-logo">tenner</h1></NavLink>
                <NavBar className="nav">
                    {loggedInUser && <>
                        <li className="user-logIn">
                            <span>{`Hi ${loggedInUser.fullname}.`}</span>
                            <NavLink to="/user"></NavLink>
                        </li>
                        <li><button onClick={() => onLogout()}>Logout</button></li>
                    </>}
                    {!loggedInUser && <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                    </>}
                </NavBar>
            </header>
        )
    }
}

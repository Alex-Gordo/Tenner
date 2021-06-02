
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'

export class NavBar extends Component {

    state = {
        isOpenModal: false
    }


    render() {

        // const onSignIn = () => {
        //     console.log('sign iiiin');
        //     this.setState({ isOpenModal: true })
        //     console.log('sign oooooin');
        //     console.log(this.state);
        // }

        return (
            <nav className="navbar">
                <ul className="navbar-list flex">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/gigs">Explore</NavLink></li>
                    <li><NavLink to="/user/dashboard">Dashboard</NavLink></li>
                    <li><NewModal /></li>
                </ul>
            </nav>
        )
    }
}

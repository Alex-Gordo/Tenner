import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'
<<<<<<< HEAD
import { userService } from '../services/userService'
import {logout} from '../store/actions/userActions'
import {UserMenu} from '../cmps/UserMenu'
=======
// import { userService } from '../services/userService'
import { logout } from '../store/actions/userActions'
>>>>>>> 64ff77f2c97d7a277c307ca9755545f0737f1c36

class _NavBar extends Component {

    state = {
        isOpenModal: false,
        // isLoggedIn: this.props.loggedInUser

    }


    onLogoutClick = () => {
        // userService.logout()
        this.props.logout()
        // console.log("User: " + this.state.username + " password: " + this.state.password)
    }

    render() {
        //    console.log('user', this.state.isLoggedIn )
        return (
            <nav className="navbar">
                <ul className="navbar-list flex">
                    <li><NavLink to="/gigs">Explore</NavLink></li>
                    

                    {(!this.props.loggedInUser) && <>
                        <li><NewModal /></li>
                    </>}

                    {(this.props.loggedInUser) && <>
                    <li><NavLink to="/user/dashboard">Dashboard</NavLink></li>
                    <button onClick={this.onLogoutClick}>Logout</button>
                    </> } 
                    <UserMenu/>
               
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    // console.log('header', state.userModule.loggedInUser);
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    logout
}
export const NavBar = connect(mapStateToProps, mapDispatchToProps)(_NavBar)

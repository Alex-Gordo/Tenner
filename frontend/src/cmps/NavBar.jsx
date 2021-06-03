
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'
import {userService} from '../services/userService'

class _NavBar extends Component {

    state = {
        isOpenModal: false,
        // isLoggedIn: this.props.loggedInUser
 
    }

 
    onLogoutClick = () => {
        userService.logout()
        // this.props.onLogoutprop(this.state)
        // console.log("User: " + this.state.username + " password: " + this.state.password)
        // this.props.handleClose()
    }

    render() {
       console.log('user', this.state.isLoggedIn )
            return (
            <nav className="navbar">
                <ul className="navbar-list flex">
                    {/* <li><NavLink to="/about">About</NavLink></li> */}
                    <li><NavLink to="/gigs">Explore</NavLink></li>

                    {(this.props.loggedInUser === null) && <>
                    <li><NewModal /></li>
                    </> }        

                    {!(this.props.loggedInUser === null) && <>
                    <li><NavLink to="/user/dashboard">Dashboard</NavLink></li>
                    <button onClick={this.onLogoutClick}>Logout</button>
                    </> } 
               
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state) {
    console.log('header', state.userModule.loggedInUser);
    return {
      loggedInUser: state.userModule.loggedInUser
    }
  }

// const mapDispatchToProps = {
//     onLogoutprop: onLogout
// }
export const NavBar = connect(mapStateToProps, null)(_NavBar)

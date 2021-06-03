
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'
import { userService } from '../services/userService'

class _NavBar extends Component {

    state = {
        isOpenModal: false,
        // isLoggedIn: this.props.loggedInUser
 
    }

<<<<<<< HEAD
 
    onLogoutClick = () => {
        userService.logout()
        // this.props.onLogoutprop(this.state)
        // console.log("User: " + this.state.username + " password: " + this.state.password)
        // this.props.handleClose()
=======
    onLogout = () => {
        userService.logout()
        this.setState({ isLoggedIn: false })
>>>>>>> 8994bb1dd1abe687cd94709a3243703fbb35333b
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
                    </>}

                    {!(this.props.loggedInUser === null) && <>
<<<<<<< HEAD
                    <li><NavLink to="/user/dashboard">Dashboard</NavLink></li>
                    <button onClick={this.onLogoutClick}>Logout</button>
                    </> } 
               
=======
                        <h2>Hi {this.props.loggedInUser.fullname} </h2>
                        <li><NavLink to="/user/dashboard">Dashboard</NavLink></li>
                        <button onClick={() => this.onLogout()}>Logout</button>
                    </>}



                    {/* <li><NewModal /></li> */}

>>>>>>> 8994bb1dd1abe687cd94709a3243703fbb35333b
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

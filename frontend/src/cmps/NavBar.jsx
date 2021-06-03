
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'

class _NavBar extends Component {

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

                    {(this.props.loggedInUser === null) && <>
                    <li><NewModal /></li>
                    </> }        

                    {!(this.props.loggedInUser === null) && <>
                    <h2>Hi {this.props.loggedInUser.fullname} </h2>
                    <button>Logout</button>
                    </> } 
               

                    
                    {/* <li><NewModal /></li> */}
                    
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
//     loadGigs
// }
export const NavBar = connect(mapStateToProps, null)(_NavBar)

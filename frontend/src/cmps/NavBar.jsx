import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NewModal } from './Modal'
import { logout } from '../store/actions/userActions'
import { UserMenu } from '../cmps/UserMenu'
// import { LoginGoogle} from './LoginGoogle.jsx';


class _NavBar extends Component {



    state = {
        isOpenModal: false,
        isLoggedIn: this.props.loggedInUser,
    }

    render() {
        return (
            <nav className="navbar">

                <ul className="navbar-list flex">
                    <li>
                        {/* <LoginGoogle/> */}
                    </li>
                    <li><NavLink to="/gigs">Explore</NavLink></li>


                    {(!this.props.loggedInUser) && <>
                        <li><NewModal /></li>
                    </>}

                    {(this.props.loggedInUser) && <>
                        <UserMenu user={this.props.loggedInUser} logoutFunc={this.props.logout} />
                    </>}


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

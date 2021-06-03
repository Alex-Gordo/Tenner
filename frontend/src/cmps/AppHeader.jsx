import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { NavBar } from './NavBar.jsx';
import { NewModal } from './Modal'



class _AppHeader extends Component {
    state = {
        isScrolled: false,
    }

    componentDidMount() {
        window.addEventListener("scroll", (e) => this.handleNavigation(e));
    }

    componentWillUnmount() {

    }

    handleNavigation = (e) => {
        if (window.scrollY > 0) {
            this.setState({ isScrolled: true })
        } else {
            this.setState({ isScrolled: false })
        }

    }

    render() {

        const { isScrolled } = this.state
        return (
            <React.Fragment>
                <header className={`header ${isScrolled || this.props.location.pathname !== '/' ? 'header-colored' : ''}`}>
                    <div className="header-content main-layout">
                        <NavLink to="/"><h1 className="header-logo">tenner</h1></NavLink>
                        <NavBar className="nav flex" >
                            {/* {loggedInUser && <>
                                <li className="user-logIn">
                                    <span>aaaa{`Hi ${loggedInUser.fullname}.`}</span>
                                    <NavLink to="/user"></NavLink>
                                </li>
                                <li><button onClick={() => onLogout()}>Logout</button></li>
                            </>}
                            {
                                !loggedInUser && <>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                    <li><NavLink to="/signup">Signup</NavLink></li>
                                </>
                            } */}
                        </NavBar >

                    </div >
                </header >
            </React.Fragment >
        )
    }
}

// const AppHeaderWithHistory = withRouter(AppHeader);


function mapStateToProps(state) {
    return {
      loggedInUser: state.userModule.loggedInUser
    }
  }

// const mapDispatchToProps = {
//     loadGigs
// }
export const AppHeader = connect(mapStateToProps, null)(_AppHeader)
export default withRouter(AppHeader)
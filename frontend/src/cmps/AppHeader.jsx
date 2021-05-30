import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NavBar } from './NavBar.jsx';


class AppHeader extends Component {
    state = {
        loggedInUser: 'aaa',
        isScrolled: false,
        // isExplore: true
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
        const { onLogout, loggedInUser } = this.props
        const { isScrolled, isExplore } = this.state
        return (
            <React.Fragment>
                <header className="header" >
                    <div className={`header-content main-layout ${isScrolled || this.props.location.pathname !== '/' ? 'header-colored' : ''}`}>
                        <NavLink to="/"><h1 className="header-logo">tenner</h1></NavLink>
                        <NavBar className="nav flex">
                            {loggedInUser && <>
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
                            }
                        </NavBar >
                    </div >
                </header >
            </React.Fragment >
        )
    }
}

// const AppHeaderWithHistory = withRouter(AppHeader);

export default withRouter(AppHeader)
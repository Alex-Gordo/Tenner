import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onLogin, onSignup } from '../store/actions/userActions.js'
// import { Modal, TextField } from '@material-ui/core'
// import { NewModal } from './Modal'

export class _LoginSignUp extends Component {

    state = {
        fullname: "",
        username: "",
        password: "",
        pagemode: ''
    }

    componentDidMount() {
        // console.log("login did mount");
        // console.log('pagemode', this.props.pageMode);
        this.setState({ pagemode: this.props.pageMode })
        // console.log('pagemode', this.state.pageMode);
    }

    handleUsernameInput = event => {
        this.setState({ username: event.target.value });
    };

    handlePasswordInput = event => {
        this.setState({ password: event.target.value });
    };

    handleSignupInput = event => {
        this.setState({ fullname: event.target.value });
    };

    onLoginClick = () => {
        this.props.onLoginprop(this.state)
        console.log("User: " + this.state.username + " password: " + this.state.password)
        this.props.handleClose()
    }
    onSignupClick = () => {
        this.props.onSignprop(this.state)
        console.log("User: " + this.state.username + " password: " + this.state.password + "fullname: " + this.state.fullname)
    }




    render() {
        // console.log("login render");
        return (
            <React.Fragment>
                <div>
                    {(this.props.pageMode === 'join') && <>
                        <h3>Signup</h3>
                        <input id="fullname" onChange={this.handleFullnameInput} type="text" placeholder="Full Name" />
                        <input id="username" onChange={this.handleUsernameInput} type="text" placeholder="Username" />
                        <input id="password" onChange={this.handlePasswordInput} type="password" placeholder="Password" /> <br />
                        <button className="btn-login" onClick={this.onSignupClick}>Continue</button>
                    </>}

                    {(this.props.pageMode === 'login') && <>
                        <h3>Login</h3>
                        <input id="username" onChange={this.handleUsernameInput} type="text" placeholder="Username" />
                        <input id="password" onChange={this.handlePasswordInput} type="password" placeholder="Password" /> <br />
                        <button className="btn-login" onClick={this.onLoginClick}>Login</button>
                    </>}
                </div>
            </React.Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         users: state.userModule.users,
//         loggedInUser: state.userModule.loggedInUser,
//         isLoading: state.systemModule.isLoading
//     }
// }

const mapDispatchToProps = {
    onLoginprop: onLogin,
    onSignprop: onSignup

}

export const LoginSignUp = connect(null, mapDispatchToProps)(_LoginSignUp)
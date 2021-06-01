import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onLogin, onSignup } from '../store/actions/userActions.js'
import { TextField } from '@material-ui/core'

export class _LoginSignUp extends Component {

    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        console.log("login did mount");
    }

    handleUsernameInput = event => {
        this.setState({ username: event.target.value });
    };

    handlePasswordInput = event => {
        this.setState({ password: event.target.value });
    };

    onLoginClick = () => {
        console.log("User: " + this.state.username + " password: " + this.state.password)
    }

    render() {
        console.log("login render");

        return (
            <React.Fragment>
                <div>
                    <h3>Login</h3>
                    <h3>Login</h3>
                    <h3>Login</h3>
                    <h3>Login</h3>
                    <form noValidate autoComplete="off">
                        <input id="username" onChange={this.handleUsernameInput} type="text" placeholder="Username" />
                        <input id="password" onChange={this.handlePasswordInput} type="password" placeholder="Password" />
                        <button class="btn-login" onClick={this.onLoginClick}>Login</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}


const mapDispatchToProps = {
    onLogin,
    onSignup,
}

export const LoginSignUp = connect(mapStateToProps, mapDispatchToProps)(_LoginSignUp)
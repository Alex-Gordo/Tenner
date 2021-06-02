import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onLogin, onSignup } from '../store/actions/userActions.js'
// import { Modal, TextField } from '@material-ui/core'
// import { NewModal } from './Modal'

export class _LoginSignUp extends Component {

    state ={ 
    username: "",
    password: "",
    pagemode: ''
}

    componentDidMount() {
        console.log("login did mount");
        console.log('pagemode', this.props.pageMode);
        this.setState({pagemode: this.props.pageMode})
        console.log('pagemode', this.state.pageMode);
    
    }

    handleUsernameInput = event => {
        this.setState({ username: event.target.value });
    };

    handlePasswordInput = event => {
        this.setState({ password: event.target.value });
    };

    onLoginClick = () => {
        this.props.onloginprop(this.state)
        console.log("User: " + this.state.username + " password: " + this.state.password)
        this.props.handleClose()
    }




    render() {
        // console.log("login render");
        return (
            <React.Fragment>
                <div>
                    { (this.props.pageMode=== 'login') ? 'login' : 'sigup'}
                    <h3>Login</h3>
                    <input id="username" onChange={this.handleUsernameInput} type="text" placeholder="Username" />
<<<<<<< HEAD
                    <input id="password" onChange={this.handlePasswordInput} type="password" placeholder="Password" /> <br/>
                    <button className="btn-login" onClick={this.onLoginClick}>Login</button>
        
=======
                    <input id="password" onChange={this.handlePasswordInput} type="password" placeholder="Password" />
                    <button className="btn-login button" onClick={this.onLoginClick}>Login</button>
                    {/* <NewModal/> */}
>>>>>>> c586fee65d614c82cf3a3565d7e2e6b0b8ecbbb8
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.userModule.users,
        loggedInUser: state.userModule.loggedInUser,
        isLoading: state.systemModule.isLoading
    }
}

const mapDispatchToProps = {
    onloginprop: onLogin
    // onSignup,
}

export const LoginSignUp = connect(null, mapDispatchToProps)(_LoginSignUp)
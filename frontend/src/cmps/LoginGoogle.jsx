import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';


export class LoginGoogle extends Component {

    responseGoogle = (response) => {
        console.log(response)
        // console.log(response.profile)
    }
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="1012835064161-ufjn8aedt8dd1ikql834elsh0n7pvn39.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.response}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

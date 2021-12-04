import React from 'react';
import BasicAuth from './authComponents/BasicAuth';
import BearerToken from './authComponents/BearerToken';


const RequestHoc = (Request) => {
    return (class Hoc extends React.Component {
        constructor() {
            super();
            this.state = {
                url: null,
                authType: "bearerToken",
                username: null,
                password: null,
                token: null,
            };
        }

        setURL = (e) => {
            this.setState({
                url: e.target.value
            });
        }

        setAuthType = (e) => {
            if (e.target.checked)
                this.setState({
                    authType: e.target.value
                });
        }

        render() {
            return (
                <>
                    <Request
                        url={this.state.url}
                        authType={this.state.authType}
                        setURL={this.setURL}
                        username={this.state.username}
                        password={this.state.password}
                        token={this.state.token}
                    />
                    <div>
                        <input type="radio" value="bearerToken" id="bearerToken" onChange={this.setAuthType} name="auth" checked={this.state.authType === "bearerToken"} />
                        <label htmlFor="bearerToken">Bearer Token</label>
                        <input type="radio" value="basicAuth" id="basicAuth" onChange={this.setAuthType} name="auth" checked={this.state.authType === "basicAuth"} />
                        <label htmlFor="basicAuth">Basic Auth</label>
                    </div>
                    {this.state.authType === "bearerToken" ?
                        <BearerToken onChange={e => this.setState({ token: e.target.value })} /> :
                        <BasicAuth onChangeUsername={e => this.setState({ username: e.target.value })} onChangePassword={e => this.setState({ password: e.target.value })} />}
                </>
            )

        }
    })
}

export default RequestHoc
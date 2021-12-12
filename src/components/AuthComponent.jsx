import React from 'react';
import BasicAuth from './authComponents/BasicAuth';
import BearerToken from './authComponents/BearerToken';

const AuthComponent = ({ setToken, setUsername, setPassword, token, username, password, authType, setAuthType }) => {
    return (
        <>
            <div
                style={{
                    margin: "1rem 0",
                    width: "25%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div>
                    <input type="radio" id="bearerToken" value="bearerToken" onChange={setAuthType} checked={authType === "bearerToken"} name="auth" />
                    <label htmlFor="token">Bearer Token</label>
                </div>
                <div>
                    <input type="radio" id="basicAuth" value="basicAuth" onChange={setAuthType} checked={authType === "basicAuth"} name="auth" />
                    <label htmlFor="basicAuth">Basic</label>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "70%",
                }}>
                {authType === "bearerToken" ?
                    <BearerToken onChange={setToken}
                        token={token}
                    /> :
                    <BasicAuth
                        onChangeUsername={setUsername}
                        onChangePassword={setPassword}
                        password={password}
                        username={username}
                    />}
            </div>
        </>)

}

export default AuthComponent
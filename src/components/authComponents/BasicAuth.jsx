import React from 'react';

const BasicAuth = ({ onChangeUsername, onChangePassword }) => {
    return (
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input onChange={onChangeUsername} id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={onChangePassword} id="password" />
            </div>
        </div>
    )

}

export default BasicAuth
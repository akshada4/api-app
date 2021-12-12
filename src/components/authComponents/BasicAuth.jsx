import React from 'react';

const BasicAuth = ({ onChangeUsername, onChangePassword, password, username }) => {
    console.log(password)
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "0.30fr 2fr",
                gridTemplateRows: "auto auto",
                rowGap: "1rem",
                columnGap: "0.25rem",
            }}
        >
            <label htmlFor="username">Username</label>
            <input onChange={onChangeUsername} id="username" value={username} style={{ width: "25rem", fontSize: "1rem" }} />

            <label htmlFor="password">Password</label>
            <input onChange={onChangePassword} type="password" id="password" value={password} style={{ width: "25rem", fontSize: "1rem" }} />

        </div>
    )

}

export default BasicAuth
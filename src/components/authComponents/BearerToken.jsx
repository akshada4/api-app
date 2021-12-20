import React from 'react';

function BearerToken({ onChange, token }) {
    return (
        <div>
            <label htmlFor="token" style={{ marginRight: "0.25rem" }}>Token</label>
            <input onChange={onChange} id="token" value={token} style={{ width: "25rem", fontSize: "1rem" }}/>
        </div>
    )

}

export default BearerToken
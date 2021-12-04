import React from 'react';

const BearerToken = ({onChange}) => {
    return (
        <div>
            <label htmlFor="token">Token</label>
            <input onChange={onChange} id="token"/>
        </div>
    )

}

export default BearerToken